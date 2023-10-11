import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import User from "@/utils/models/Users";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { generateToken } from "@/templates/authTemplates";
import ActivateAccount from "@/emails/ActivateAccount";
import sendEmail from "@/utils/resend";
import { sendMail } from "@/utils/sendMail";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/helpers/authOptions";
import {
  AdminHomeCleaningQuoteRequest,
  AdminLaundryQuoteRequest,
  UserQuoteRequestConfirmation,
} from "@/emails";
import moment from "moment";
import { Request } from "@/utils/models/Requests";

type Item = {
  name: string;
  id: number;
  amount: number;
};

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    const body = await req.json();

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "you are not loggedIn" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "user does not exist" });
    }

    const { data } = body;
    console.log(body);
    const timestamp = moment().format("YYYY-MM-DD HH:mm:ss");
    const turnaroundTime = moment().add(1, "day").format("YYYY-MM-DD HH:mm:ss");

    const quoteText = data.quote
      .filter((item: any) => item.amount > 0)
      .map((item: any) => `${item.name} -- ${item.amount}`)
      .join(", ");

    const newItems: Omit<Item, "id">[] = data.quote.map(
      ({ id, ...rest }: { id: number; rest: any }) => rest
    );

    const newRequest = new Request({
      user,
      type: data.type,
      items: newItems,
      from: `${user.address}, ${user.lga}, ${user.city}, ${user.state}`,
      date: timestamp,
    });

    await newRequest.save();

    // await sendEmail(
    //   user.email,
    //   "new Quote",
    //   UserQuoteRequestConfirmation({
    //     firstName: user.firstName,
    //     serviceType: data.type,
    //     description: quoteText,
    //     timestamp: timestamp,
    //     turnaroundTime: turnaroundTime,
    //     adminContact: "info@diboruwa.com",
    //   })
    // );

    // if (data.type === "laundry") {
    //   await sendEmail(
    //     "ibrahim.saliman.zainab@gmail.com",
    //     "new Quote",
    //     AdminLaundryQuoteRequest({
    //       adminName: "Ibrahim",
    //       userName: `${user.firstName} ${user.lastName}`,
    //       userEmail: user.email,
    //       userContact: user.phone,
    //       userAddress: `${user.address}, ${user.lga}, ${user.city}, ${user.state}`,
    //       laundryItems: data.quote,
    //     })
    //   );
    // } else if (data.type === "cleaning") {
    //   await sendEmail(
    //     "ibrahim.saliman.zainab@gmail.com",
    //     "new Quote",
    //     AdminHomeCleaningQuoteRequest({
    //       adminName: "Ibrahim",
    //       userName: `${user.firstName} ${user.lastName}`,
    //       userEmail: user.email,
    //       userContact: user.phone,
    //       userAddress: `${user.address}, ${user.lga}, ${user.city}, ${user.state}`,
    //       homeCleaningAreas: data.quote,
    //     })
    //   );
    // }

    return NextResponse.json(
      { message: "emails sent successfully", success: true },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  } finally {
    await closeDB();
  }
}
