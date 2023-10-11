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
  MovingRequestEmail,
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

    console.log("ooooo");

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

    console.log(data);

    const newItems: Omit<Item, "id">[] = data.properties.map(
      ({ id, ...rest }: { id: number; rest: any }) => rest
    );

    const newRequest = new Request({
      user,
      type: data.type,
      items: newItems,
      from: data.address.from,
      to: data.address.to,
      date: data.address.date,
    });

    await newRequest.save();

    // await sendEmail(
    //   user.email,
    //   "new Quote",
    //   MovingRequestEmail({
    //     customerName: `${user.firstName} ${user.lastName}`,
    //     customerEmail: user.email,
    //     customerPhone: user.phone,
    //     currentAddress: data.address.from,
    //     destinationAddress: data.address.to,
    //     preferredDate: moment(data.address.date).format("MMMM D, YYYY"),

    //     companyName: "Dibo Ruwa",
    //   })
    // );

    return NextResponse.json(
      { message: "emails sent successfully", success: true },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(err);
  } finally {
    await closeDB();
  }
}
