"use clent";

import React, { ReactNode } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const colors = {
  lightBlue: "#00afdb",
  darkBlue: "#00a6cf",
};

interface EmailTemplateProps {
  subject: string;
  children: ReactNode;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  subject,
  children,
}) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(14, 252, 213, 0.329)",
        padding: "5% 10%",
        minHeight: "100vh",
      }}
      className="main"
    >
      <div
        className="logoContainer"
        style={{
          width: "100px",
          height: "100px",
          position: "relative",
          margin: "auto",
        }}
      >
        {/* <img
          src={logo}
          alt="Your Logo"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        /> */}
      </div>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          overflow: "hidden",
          margin: " 30px 0",
        }}
      >
        <div
          style={{
            backgroundColor: colors.darkBlue,
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "white", margin: "0", fontSize: "24px" }}>
            {subject}
          </h1>
        </div>
        <div style={{ padding: "5%" }}>
          {/* Specific Email Content Goes Here */}
          {children}
        </div>
      </div>
      <div
        style={{
          textAlign: "center",

          padding: "10px",
        }}
        className="footer"
      >
        <div
          className="contact"
          style={{
            textAlign: "center",
            margin: "auto",
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Follow us on:
          </p>

          <div
            className="socials"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              fontSize: "20px",
            }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: colors.lightBlue,
              }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: colors.lightBlue,
              }}
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: colors.lightBlue,
              }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: colors.lightBlue,
              }}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div
          className="copyrighting"
          style={{
            color: "#949494",
          }}
        >
          &copy; 2023 Your Company Name. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export const PasswordRecoveryEmail: React.FC<{
  userName: string;
  passwordResetLink: string;
}> = ({ userName, passwordResetLink }) => {
  const contentStyle: React.CSSProperties = {
    backgroundColor: "white",
    lineHeight: "1.5",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: colors.lightBlue,
    color: "#fff",
    padding: "12px 25px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    margin: "15px 0",
  };
  return (
    <EmailTemplate subject="Password Recovery">
      <div style={contentStyle}>
        <p>Hello {userName},</p>
        <p>
          We received a request to reset your password for your Dibo Ruwa
          account. If you didn&#39;t make this request, please ignore this
          email.
        </p>
        <p>To set a new password, click the link below:</p>

        <a href={passwordResetLink}>
          <button style={buttonStyle}>Reset Password</button>
        </a>

        <p>
          This link will expire in 24 hours, so be sure to use it right away.
        </p>
        <p>
          Stay safe, and always ensure you use a strong, unique password for
          your accounts.
        </p>
        <p>Best,</p>
        <p>The Dibo Ruwa Team</p>
      </div>
    </EmailTemplate>
  );
};

export const AdminEmailComponent: React.FC<{
  adminFirstName: string;
  partnerFullName: string;
  partnerBusinessName: string;
  partnerContactInfo: string;
  registrationDate: string;
  adminEmail: string;
  yourName: string;
}> = ({
  adminFirstName,
  partnerFullName,
  partnerBusinessName,
  partnerContactInfo,
  registrationDate,
  adminEmail,
  yourName,
}) => {
  const emailStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
    display: "grid",
    gap: "15px",
  };

  const contentStyles = {
    padding: "20px",
    listStyle: "none",
  };
  const listStyles = {
    padding: "20px",
    margin: "20px 0",
    listStyle: "none",
    border: "2px solid rgba(53, 247, 127, 0.37)",
    width: "auto",
  };

  return (
    <EmailTemplate subject="  New Partner Notification!!!">
      <div style={emailStyles}>
        <div style={contentStyles}>
          <p>
            Hey <strong>{adminFirstName}</strong>,
          </p>
          <p>
            We have some exciting news to share - a new partner has registered
            with us! Here are the preliminary details:
          </p>
          <ul style={listStyles}>
            <li>
              <strong> Partner Name:</strong>
              {partnerFullName}
            </li>
            <li>
              <strong> Business Name:</strong>
              {partnerBusinessName}
            </li>
            <li>
              <strong> Contact Information:</strong>
              {partnerContactInfo}
            </li>
            <li>
              <strong> Registration Date:</strong>
              {registrationDate}
            </li>
          </ul>
          <p>
            To facilitate a smooth onboarding process, could you please review
            the details and activate their account? In case any technical
            assistance is required, feel free to coordinate with the technical
            team.
          </p>
          <p>
            Thank you for ensuring a seamless integration process for our new
            partners.
          </p>
          <p>Best regards, {yourName}</p>
        </div>
      </div>
    </EmailTemplate>
  );
};

export const PartnerWelcomeEmailComponent: React.FC<{
  partnerFirstName: string;
  partnerEmail: string;
}> = ({ partnerFirstName, partnerEmail }) => {
  const emailStyles = {
    lineHeight: "1.6",
  };

  const contentStyles = {
    padding: "20px",
    listStyle: "none",
    display: "grid",
    gap: "10px",
  };

  return (
    <EmailTemplate subject=" Welcome">
      <div style={emailStyles}>
        <div style={contentStyles}>
          <p>
            Hello <strong>{partnerFirstName}</strong>,
          </p>
          <p>Warm greetings from Dibo Ruwa!</p>
          <p>
            We are thrilled to have you onboard as our latest partner. Dibo Ruwa
            prides itself on building lasting partnerships, offering top-quality
            services, and emphasizing environmental sustainability.
          </p>
          <h4>Here&#39;s what you can expect next:</h4>
          <ul style={{ listStyle: "none", margin: "5px 20px 20px" }}>
            <li>
              <strong> Onboarding Session:</strong>
              Our team will reach out soon to schedule an orientation, where
              we&#39;ll walk you through our platform and answer any questions
              you might have.
            </li>
            <li>
              <strong>Access to Resources:</strong>
              You will have access to our suite of partner resources to make our
              collaboration seamless.
            </li>
            <li>
              <strong> Continuous Support:</strong>
              Our dedicated support team is here to assist you at any step of
              the way. Should you have any technical queries, they&#39;re just a
              call or email away.
            </li>
          </ul>
          <p>
            In the meantime, please ensure that all your details with us are
            accurate. This helps in fostering a smooth working relationship.
          </p>
          <p>
            Welcome to our community! We&#39;re confident that together,
            we&#39;ll create exceptional experiences for our customers and bring
            forward the spirit of innovation and sustainability that defines
            Dibo Ruwa.
          </p>
          <p>Looking forward to a fruitful association.</p>
          <p>Warm Regards, The Dibo Ruwa Team</p>
        </div>
      </div>
    </EmailTemplate>
  );
};

export const PartnerVerificationEmailComponent: React.FC<{
  partnerFirstName: string;
  signInLink: string;
  supportEmail: string;
  supportPhoneNumber: string;
}> = ({ partnerFirstName, signInLink, supportEmail, supportPhoneNumber }) => {
  const emailStyles = {
    lineHeight: "1.6",
  };

  const contentStyles = {
    padding: "20px",
    listStyle: "none",
    display: "grid",
    gap: "10px",
  };

  const buttonStyles = {
    backgroundColor: colors.lightBlue,
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    width: "max-content",
  };

  return (
    <EmailTemplate subject="Verification Successful!">
      <div style={emailStyles}>
        <div style={contentStyles}>
          <p>
            Hello <strong>{partnerFirstName}</strong> ,
          </p>
          <p>
            Great news! Your partnership verification with Dibo Ruwa is now
            complete. We&#39;re excited to have you on board and can&#39;t wait
            to see all the incredible value you&#39;ll bring to our platform.
          </p>
          <p>
            Now that you&#39;re verified, you can sign in to your partner
            dashboard to start managing and fulfilling orders seamlessly.
          </p>
          <a href={signInLink}>
            <button style={buttonStyles}> Sign In to Your Dashboard</button>
          </a>
          <p>
            <strong> Note:</strong>
            <em>
              The button will contain a direct link to the partner&#39;s
              dashboard/sign-in page.
            </em>
          </p>
          <p>
            If you encounter any challenges or have questions about using the
            dashboard, our support team is here to assist you. Contact us at
            {supportEmail} or {supportPhoneNumber}.
          </p>
          <p>
            Welcome to the Dibo Ruwa family. Let&#39;s create amazing
            experiences together!
          </p>
          <p>Best wishes, The Dibo Ruwa Team</p>
        </div>
      </div>
    </EmailTemplate>
  );
};

export const PartnerOrderNotificationComponent: React.FC<{
  partnerFirstName: string;
  customerFullName: string;
  orderNumber: string;
  itemsOrdered: any;
  totalAmount: string;
  customerAddress: string;
  orderTimestamp: string;
  orderLink: string;
}> = ({
  partnerFirstName,
  customerFullName,
  orderNumber,
  itemsOrdered,
  totalAmount,
  customerAddress,
  orderTimestamp,
  orderLink,
}) => {
  const emailStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const contentStyles = {
    padding: "20px",
    listStyle: "none",
    display: "grid",
    gap: "10px",
  };

  const listStyles = {
    padding: "20px",
    margin: "20px 0",
    listStyle: "none",
    border: `2px solid ${colors.darkBlue}`,
    width: "auto",
    display: "grid",
    gap: "10px",
  };

  const buttonStyles = {
    backgroundColor: colors.darkBlue,
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    width: "max-content",
  };

  const tableStyles = {
    border: `2px solid ${colors.darkBlue}`, // Green border: ;
   
    width: "100%", // Make the table take up 100% width
  };

  const headerCellStyle = {
    // background: "#35f77f", // Header cell background color
    color: "#fff", // Header cell text color
    padding: "10px", // Header cell padding
  };

  const cellStyle = {
    padding: "10px", // Cell padding
  };

  return (
    <EmailTemplate subject=" New Order Received!!!">
      <div style={emailStyles}>
        <div style={contentStyles}>
          <p>
            {" "}
            Hello{" "}
            <strong style={{ textTransform: "capitalize" }}>
              {partnerFirstName}
            </strong>
            ,,
          </p>
          <p>
            Good news! You&#39;ve received a new order from {customerFullName}.
          </p>

          <h3>Order Details:</h3>

          <ul style={listStyles}>
            <li>
              <strong> Customer Name:</strong>
              {customerFullName}{" "}
            </li>
            <li>
              <strong>Order ID: </strong>#{orderNumber}{" "}
            </li>
            <li>
              <table style={tableStyles}>
                <thead
                  style={{
                    background: colors.darkBlue, // Header cell background color: ;
                    color: "#fff", // Header cell text color
                  }}
                >
                  <tr>
                    <th style={headerCellStyle}>Item</th>
                    <th style={headerCellStyle}>Price</th>
                    <th style={headerCellStyle}>Quantity</th>
                    <th style={headerCellStyle}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsOrdered.map((item: any) => (
                    <tr key={item._id}>
                      <td style={cellStyle}>{item.title}</td>
                      <td style={cellStyle}>${item.price}</td>
                      <td style={cellStyle}>{item.quantity}</td>
                      <td style={cellStyle}>${item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </li>
            <li>
              <strong> Total Amount:</strong>
              {totalAmount}{" "}
            </li>
            <li>
              <strong> Delivery Address:</strong>
              {customerAddress}{" "}
            </li>
            <li>
              <strong>Order Date & Time:</strong>
              {orderTimestamp}{" "}
            </li>
          </ul>
          <a href={orderLink}>
            <button style={buttonStyles}>View & Manage Order</button>
          </a>
          <p>
            <strong>Note:</strong>{" "}
            <em>The button links directly to the order in your dashboard.</em>{" "}
          </p>
          <p>
            For any queries or assistance, feel free to reach out to our support
            team.
          </p>
          <p>Best Regards, Dibo Ruwa Support</p>
        </div>
      </div>
    </EmailTemplate>
  );
};

export const AdminOrderNotificationComponent: React.FC<{
  customerFullName: string;
  orderNumber: string;
  itemsOrdered: any;
  totalAmount: string;
  customerAddress: string;
  partnerFullName: string;
  orderTimestamp: string;
  adminDashboardLink: string;
}> = ({
  customerFullName,
  orderNumber,
  itemsOrdered,
  totalAmount,
  customerAddress,
  partnerFullName,
  orderTimestamp,
  adminDashboardLink,
}) => {
  const emailStyles = {
    lineHeight: "1.6",
  };

  const contentStyles = {
    padding: "20px",
    listStyle: "none",
    display: "grid",
    gap: "10px",
  };

  const listStyles = {
    padding: "20px",
    margin: "20px 0",
    listStyle: "none",
    border: `2px solid ${colors.darkBlue}`,
    width: "auto",
    display: "grid",
    gap: "10px",
  };

  const buttonStyles = {
    backgroundColor: colors.lightBlue,
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    width: "max-content",
    margin: "20px 0",
  };

  const tableStyles = {
    border: `2px solid ${colors.darkBlue}`, // Green border: ;
   
    width: "100%", // Make the table take up 100% width
  };

  const headerCellStyle = {
    // background: "#35f77f", // Header cell background color
    color: "#fff", // Header cell text color
    padding: "10px", // Header cell padding
  };

  const cellStyle = {
    padding: "10px", // Cell padding
  };

  return (
    <EmailTemplate subject=" New Order Placed">
      <div style={emailStyles}>
        <div style={contentStyles}>
          <p>Admin Team,</p>
          <p>
            We&#39;ve received a new order placed by{" "}
            <strong> {customerFullName}</strong> and it has been assigned to{" "}
            <strong>{partnerFullName}</strong> for fulfillment.
          </p>

          <h3>Order Summary:</h3>

          <ul style={listStyles}>
            <li>
              <strong> Order ID:</strong>#{orderNumber}{" "}
            </li>
            <li>
              <table style={tableStyles}>
                <thead
                  style={{
                    background: colors.darkBlue, // Header cell background color: ;
                    color: "#fff", // Header cell text color
                  }}
                >
                  <tr>
                    <th style={headerCellStyle}>Item</th>
                    <th style={headerCellStyle}>Price</th>
                    <th style={headerCellStyle}>Quantity</th>
                    <th style={headerCellStyle}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsOrdered.map((item: any) => (
                    <tr key={item._id}>
                      <td style={cellStyle}>{item.title}</td>
                      <td style={cellStyle}>${item.price}</td>
                      <td style={cellStyle}>{item.quantity}</td>
                      <td style={cellStyle}>${item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </li>
            <li>
              <strong> Total Amount:</strong>
              {totalAmount}
            </li>
            <li>
              <strong>Delivery Address: </strong>
              {customerAddress}
            </li>
            <li>
              <strong> Assigned Partner:</strong>
              {partnerFullName}
            </li>
            <li>
              <strong> Order Date & Time:</strong>
              {orderTimestamp}
            </li>
          </ul>
          <a href={adminDashboardLink} style={buttonStyles}>
            Access Admin Dashboard
          </a>
          <p>
            <strong>Note:</strong>{" "}
            <em>
              {" "}
              The button links directly to the order in the admin dashboard.
            </em>
          </p>
          <p>
            Thank you for ensuring our customers receive the best service
            possible.
          </p>
          <p>Warm Regards, Dibo Ruwa Operations</p>
        </div>
      </div>
    </EmailTemplate>
  );
};

export const AdminOrderCancelNotificationComponent: React.FC<{
  orderNumber: string;
  customerFullName: string;
  itemsOrdered: any;
  totalAmount: string;
  customerAddress: string;
  partnerFullName: string;
  // cancellationReason: string;
  orderTimestamp: string;
  adminDashboardLink: string;
}> = ({
  orderNumber,
  customerFullName,
  itemsOrdered,
  totalAmount,
  customerAddress,
  partnerFullName,
  // cancellationReason,
  orderTimestamp,
  adminDashboardLink,
}) => {
  const emailStyles = {
    lineHeight: "1.6",
  };

  const contentStyles = {
    padding: "20px",
    listStyle: "none",
    display: "grid",
    gap: "10px",
  };

  const listStyles = {
    padding: "20px",
    margin: "5px 20px 10px",
    listStyle: "none",
    width: "auto",
    display: "grid",
    gap: "10px",
    // width: "max-content",
  };

  const buttonStyles = {
    backgroundColor: colors.darkBlue,
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    width: "max-content",
  };

  const tableStyles = {
    border: `2px solid ${colors.darkBlue}`, // Green border: ;
   
    width: "100%", // Make the table take up 100% width
  };

  const headerCellStyle = {
    // background: "#35f77f", // Header cell background color
    color: "#fff", // Header cell text color
    padding: "10px", // Header cell padding
  };

  const cellStyle = {
    padding: "10px", // Cell padding
  };

  return (
    <EmailTemplate subject=" Order Cancelled by Partner - Immediate Action Required">
      <div style={emailStyles}>
        <div style={contentStyles}>
          <p>Dear Admin Team,</p>
          <p>
            We wish to bring to your attention that Order ID{" "}
            <strong>#{orderNumber} </strong> has been cancelled by our partner,{" "}
            <strong>{partnerFullName}</strong> . This order requires immediate
            reassignment to ensure our customer receives their order in a timely
            manner.
          </p>

          <h3>Order Details:</h3>

          <ul style={listStyles}>
            <li>
              <strong> Customer Name:</strong> {customerFullName}
            </li>
            <li>
              <table style={tableStyles}>
                <thead
                  style={{
                    background: colors.darkBlue, // Header cell background color: ;
                    color: "#fff", // Header cell text color
                  }}
                >
                  <tr>
                    <th style={headerCellStyle}>Item</th>
                    <th style={headerCellStyle}>Price</th>
                    <th style={headerCellStyle}>Quantity</th>
                    <th style={headerCellStyle}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsOrdered.map((item: any) => (
                    <tr key={item._id}>
                      <td style={cellStyle}>{item.title}</td>
                      <td style={cellStyle}>${item.price}</td>
                      <td style={cellStyle}>{item.quantity}</td>
                      <td style={cellStyle}>${item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </li>
            <li>
              Total Amount: <strong>{totalAmount}</strong>
            </li>
            <li>
              <strong>Delivery Address: </strong>
              {customerAddress}
            </li>
            <li>
              <strong> Original Partner:</strong>
              {partnerFullName}
            </li>
            {/* <li>Cancellation Reason: {cancellationReason}</li> */}
            <li>
              <strong>Order Date & Time:</strong>
              {orderTimestamp}
            </li>
          </ul>
          <a href={adminDashboardLink}>
            <button style={buttonStyles}>
              Reassign Order in Admin Dashboard
            </button>
          </a>
          <p>
            <strong> Note:</strong>{" "}
            <em>
              The button links directly to the order in the admin dashboard,
              facilitating quick action.
            </em>
          </p>
          <p>
            Thank you for your swift attention to this matter. Let&#39;s ensure
            our customers experience minimal inconvenience.
          </p>
          <p>Best Regards, Dibo Ruwa Operations</p>
        </div>
      </div>
    </EmailTemplate>
  );
};

export const PartnerOrderAssignmentNotificationComponent: React.FC<{
  partnerFirstName: string;
  orderNumber: string;
  customerFullName: string;
  itemsOrdered: any;
  totalAmount: string;
  customerAddress: string;
  orderTimestamp: string;
  partnerDashboardLink: string;
}> = ({
  partnerFirstName,
  orderNumber,
  customerFullName,
  itemsOrdered,
  totalAmount,
  customerAddress,
  orderTimestamp,
  partnerDashboardLink,
}) => {
  const emailStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: "1.6",
  };

  const buttonStyles = {
    backgroundColor: colors.lightBlue,
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    margin: "20px 0",
  };

  const tableStyles = {
    border: `2px solid ${colors.darkBlue}`, // Green border: ;
   
    width: "100%", // Make the table take up 100% width
  };
  const headerCellStyle = {
    color: "#fff",
    padding: "10px",
  };

  const cellStyle = {
    padding: "10px", // Cell padding
  };

  return (
    <EmailTemplate subject=" New Order Assigned to You">
      <div style={emailStyles}>
        <p>
          Hello{" "}
          <strong style={{ textTransform: "capitalize" }}>
            {partnerFirstName}
          </strong>
          ,
        </p>
        <p>
          We are reaching out to inform you that a new order has been assigned
          to you. Please review the details below and ensure timely fulfillment
          to uphold our commitment to customer satisfaction.
        </p>

        <h3>Order Details:</h3>

        <ul>
          <li>
            {" "}
            <strong>Order ID:</strong> #{orderNumber}
          </li>
          <li>
            {" "}
            <strong>Customer Name:</strong> {customerFullName}
          </li>
          <li>
            <table style={tableStyles}>
              <thead>
                <tr>
                  <th style={headerCellStyle}>Item</th>
                  <th style={headerCellStyle}>Price</th>
                  <th style={headerCellStyle}>Quantity</th>
                  <th style={headerCellStyle}>Total</th>
                </tr>
              </thead>
              <tbody>
                {itemsOrdered.map((item: any) => (
                  <tr key={item._id}>
                    <td style={cellStyle}>{item.title}</td>
                    <td style={cellStyle}>${item.price}</td>
                    <td style={cellStyle}>{item.quantity}</td>
                    <td style={cellStyle}>${item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </li>
          <li>
            {" "}
            <strong>Total Amount:</strong> {totalAmount}
          </li>
          <li>
            {" "}
            <strong>Delivery Address:</strong> {customerAddress}
          </li>
          <li>
            {" "}
            <strong>Order Date & Time:</strong> {orderTimestamp}
          </li>
        </ul>
        <a href={partnerDashboardLink}>
          <button style={buttonStyles}>View & Manage Order</button>
        </a>
        <p>
          Note: The button will direct you to the specific order in your
          dashboard.
        </p>
        <p>
          If you encounter any challenges or require assistance, do not hesitate
          to contact our admin team. We&#39;re here to support you every step of
          the way.
        </p>
        <p>
          Thank you for your dedication and hard work. Together, we continue to
          provide exceptional service to our valued customers.
        </p>
        <p>Warm Regards, Dibo Ruwa Operations</p>
      </div>
    </EmailTemplate>
  );
};

export const DispatchStatusNotificationComponent: React.FC<{
  customerFirstName: string;
  orderNumber: string;
  itemsOrdered: any;
  totalAmount: string;
  estimatedDeliveryDate: string;
  contactNumber: string;
}> = ({
  customerFirstName,
  orderNumber,
  itemsOrdered,
  totalAmount,
  estimatedDeliveryDate,
  contactNumber,
}) => {
  const emailStyles = {
    lineHeight: "1.6",
  };

  const tableStyles = {
    border: `2px solid ${colors.darkBlue}`,
   
    width: "100%",
  };

  const headerCellStyle = {
    color: "#fff",
    padding: "10px",
  };

  const cellStyle = {
    padding: "10px",
  };

  return (
    <EmailTemplate subject={` Your Order #${orderNumber} Has Been Dispatched!`}>
      <div style={emailStyles}>
        <p>
          Dear{" "}
          <strong style={{ textTransform: "capitalize" }}>
            {customerFirstName}
          </strong>
          ,
        </p>
        <p>
          Great news! Your order with Dibo Ruwa has been dispatched and is on
          its way to you!
        </p>

        <h3>Order Details:</h3>

        <ul>
          <li>
            {" "}
            <strong>Order ID:</strong> #{orderNumber}
          </li>
          <li>
            <table style={tableStyles}>
              <thead
                style={{
                  background: colors.darkBlue, // Header cell background color: ;
                  color: "#fff", // Header cell text color
                }}
              >
                <tr>
                  <th style={headerCellStyle}>Item</th>
                  <th style={headerCellStyle}>Price</th>
                  <th style={headerCellStyle}>Quantity</th>
                  <th style={headerCellStyle}>Total</th>
                </tr>
              </thead>
              <tbody>
                {itemsOrdered.map((item: any) => (
                  <tr key={item._id}>
                    <td style={cellStyle}>{item.title}</td>
                    <td style={cellStyle}>${item.price}</td>
                    <td style={cellStyle}>{item.quantity}</td>
                    <td style={cellStyle}>${item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </li>
          <li>
            {" "}
            <strong>Total Amount:</strong> {totalAmount}
          </li>
          <li>
            {" "}
            <strong>Estimated Delivery Date:</strong> {estimatedDeliveryDate}
          </li>
        </ul>
        <p>
          Should you have any inquiries or wish to know more about your
          delivery&#39;s progress, please feel free to contact us directly at
          <strong>{contactNumber}</strong> . Our team is always here to assist
          you.
        </p>
        <p>
          Thank you for choosing Dibo Ruwa. We appreciate your trust in us and
          hope to continue being your preferred choice.
        </p>
        <p>Warm Regards, The Dibo Ruwa Team</p>
      </div>
    </EmailTemplate>
  );
};

export const DeliveredStatusNotificationComponent: React.FC<{
  customerFirstName: string;
  orderNumber: string;
  itemsDelivered: any;
  totalAmount: string;
  deliveryDate: string;
  contactNumber: string;
}> = ({
  customerFirstName,
  orderNumber,
  itemsDelivered,
  totalAmount,
  deliveryDate,
  contactNumber,
}) => {
  const emailStyles = {
    lineHeight: "1.6",
  };

  const buttonStyles = {
    backgroundColor: colors.lightBlue,
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
  };

  const tableStyles = {
    border: `2px solid ${colors.darkBlue}`, // Green border: ;
  
    width: "100%",
  };

  const headerCellStyle = {
    color: "#fff",
    padding: "10px",
  };

  const cellStyle = {
    padding: "10px", // Cell padding
  };

  return (
    <EmailTemplate
      subject={`Your Order #{orderNumber} Has Been
          Delivered!`}
    >
      <div style={emailStyles}>
        <p>
          Dear{" "}
          <strong style={{ textTransform: "capitalize" }}>
            {customerFirstName}
          </strong>
          ,
        </p>
        <p>
          We&#39;re pleased to inform you that your order from Dibo Ruwa has
          been successfully delivered. We hope everything is in order and up to
          your expectations!
        </p>

        <h3>Order Details:</h3>

        <ul style={{ listStyle: "none", margin: "5px 20px 20px" }}>
          <li>
            {" "}
            <strong>Order ID:</strong> #{orderNumber}
          </li>
          <li>
            <table style={tableStyles}>
              <thead
                style={{
                  background: colors.darkBlue, // Header cell background color: ;
                  color: "#fff", // Header cell text color
                }}
              >
                <tr>
                  <th style={headerCellStyle}>Item</th>
                  <th style={headerCellStyle}>Price</th>
                  <th style={headerCellStyle}>Quantity</th>
                  <th style={headerCellStyle}>Total</th>
                </tr>
              </thead>
              <tbody>
                {itemsDelivered.map((item: any) => (
                  <tr key={item._id}>
                    <td style={cellStyle}>{item.title}</td>
                    <td style={cellStyle}>${item.price}</td>
                    <td style={cellStyle}>{item.quantity}</td>
                    <td style={cellStyle}>${item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </li>
          <li>
            {" "}
            <strong>Total Amount:</strong> {totalAmount}
          </li>
          <li>
            {" "}
            <strong>Delivery Date:</strong> {deliveryDate}
          </li>
        </ul>
        <p>
          At Dibo Ruwa, we continuously strive to enhance our services. Your
          feedback is invaluable to us. If you could take a moment to share your
          experience, it would help us serve you better in the future.
        </p>
        <a href="#">
          <button style={buttonStyles}>Share Your Feedback</button>
        </a>
        <p>
          {" "}
          <strong>Note:</strong>{" "}
          <em>The button links directly to a feedback form or page.</em>{" "}
        </p>
        <p>
          For any queries, concerns, or further assistance, please don&#39;t
          hesitate to contact us at {contactNumber}. We&#39;re always here to
          help.
        </p>
        <p>
          Thank you for choosing Dibo Ruwa, and we look forward to serving you
          again!
        </p>
        <p>Warmest Regards, The Dibo Ruwa Team</p>
      </div>
    </EmailTemplate>
  );
};

export const AdminQuoteRequestNotification: React.FC<{
  fullName: string;
  userEmail: string;
  userContact: string;
  serviceType: string;
  description: string;
  timestamp: string;
}> = ({
  fullName,
  userEmail,
  userContact,
  serviceType,
  description,
  timestamp,
}) => {
  const adminEmailStyle: React.CSSProperties = {
    lineHeight: "2",
  };
  return (
    <EmailTemplate subject="New Quote request">
      <div style={adminEmailStyle}>
        <strong>Admin Team,</strong>
        <p>
          We have received a new quote request for our{" "}
          <strong>{serviceType}</strong> services from{" "}
          <strong>{fullName}</strong>
        </p>
        <h3>Request Details:</h3>
        <ul>
          <li>
            {" "}
            <strong>User Name:</strong> {fullName}
          </li>
          <li>
            <strong>User Email: </strong> {userEmail}
          </li>
          <li>
            <strong>User Contact: </strong> {userContact}
          </li>
          <li>
            {" "}
            <strong>Service Type:</strong> {serviceType}
          </li>
          <li>
            {" "}
            <strong>Description/Notes:</strong> {description}
          </li>
          <li>
            {" "}
            <strong>Request Date & Time:</strong> {timestamp}
          </li>
        </ul>
        <p>
          Please ensure the request is addressed promptly, and a comprehensive
          quote is provided to the user. Your prompt action is appreciated.
        </p>
        <p>Best Regards, Dibo Ruwa Operations Team</p>
      </div>
    </EmailTemplate>
  );
};

export const UserQuoteRequestConfirmation: React.FC<{
  firstName: string;
  serviceType: string | undefined;
  description: string | undefined;
  timestamp: string;
  turnaroundTime: string;
  adminContact: string;
}> = ({
  firstName,
  serviceType,
  description,
  timestamp,
  turnaroundTime,
  adminContact,
}) => {
  const userEmailStyle: React.CSSProperties = {
    lineHeight: "2",
  };
  return (
    <EmailTemplate subject="Request confirmation">
      <div style={userEmailStyle}>
        <p>
         
          Hello{" "}
          <strong style={{ textTransform: "capitalize" }}>{firstName}</strong>,
        </p>
        <p>
          Thank you for expressing interest in our {serviceType} services.
          We&#39;ve received your request for a quote and are currently
          reviewing the details.
        </p>
        <h3>Your Request Details:</h3>
        <ul style={{ listStyle: "none", margin: "5px 20px 20px" }}>
          <li>
            {" "}
            <strong>Service Type:</strong> {serviceType}
          </li>
          <li>
            {" "}
            <strong>Description/Notes:</strong> {description}
          </li>
          <li>
            {" "}
            <strong>Request Date & Time:</strong> {timestamp}
          </li>
        </ul>
        <p>
          Our team is committed to providing you with a comprehensive and
          competitive quote. You can expect to hear back from us within{" "}
          <strong>{turnaroundTime}</strong>.
        </p>
        <p>
          If you have any immediate questions or require further information,
          please don&#39;t hesitate to contact us at
          <strong>{adminContact}</strong>.
        </p>
        <p>
          Thank you for considering Dibo Ruwa for your{" "}
          <strong>{serviceType}</strong> needs. We&#39;re eager to serve you!
        </p>
        <p>Warm Regards, The Dibo Ruwa Team</p>
      </div>
    </EmailTemplate>
  );
};

export const AdminLaundryQuoteRequest: React.FC<{
  adminName: string;
  userName: string;
  userEmail: string;
  userContact: string;
  userAddress: string;
  laundryItems: any;
}> = ({
  adminName,
  userName,
  userEmail,
  userContact,
  userAddress,
  laundryItems,
}) => {
  const adminEmailStyle: React.CSSProperties = {
    lineHeight: "2",
  };
  return (
    <EmailTemplate subject="New Laundry Request">
      <div style={adminEmailStyle}>
        <p>
          Hello{" "}
          <strong style={{ textTransform: "capitalize" }}>{adminName}</strong>,
        </p>
        <p>
          We&#39;ve received a new quote request for laundry services from{" "}
          {userName}, with the following details:
        </p>
        <h3>Customer Information:</h3>
        <ul style={{ listStyle: "none", margin: "5px 20px 20px" }}>
          <li>
            {" "}
            <strong>Name:</strong> {userName}
          </li>
          <li>
            {" "}
            <strong>Email:</strong> {userEmail}
          </li>
          <li>
            <strong>Contact Number: </strong> {userContact}
          </li>
          <li>
            {" "}
            <strong>Address:</strong> {userAddress}
          </li>
        </ul>
        <h4>Laundry Items for Quotation:</h4>
        <ul style={{ listStyle: "none", margin: "5px 20px 20px" }}>
          {laundryItems.map((item: any, index: any) => (
            <li key={index}>
              {item.name} - {item.amount}
            </li>
          ))}
        </ul>
        <p>
          Please prepare a quote for the above-mentioned items and send it to
          the customer at the earliest convenience.
        </p>
        <p>Warm regards,</p>
      </div>
    </EmailTemplate>
  );
};

export const AdminHomeCleaningQuoteRequest: React.FC<{
  adminName: string;
  userName: string;
  userEmail: string;
  userContact: string;
  userAddress: string;
  homeCleaningAreas: any;
}> = ({
  adminName,
  userName,
  userEmail,
  userContact,
  userAddress,
  homeCleaningAreas,
}) => {
  const adminEmailStyle: React.CSSProperties = {
    lineHeight: "2",
  };

  return (
    <EmailTemplate subject="New Cleaning request">
      <div style={adminEmailStyle}>
        <p>
          {" "}
          Hello{" "}
          <strong style={{ textTransform: "capitalize" }}>{adminName}</strong>,
        </p>
        <p>
          We&#39;ve received a new quote request for home cleaning services from{" "}
          {userName}, with the following details:
        </p>
        <h3>Customer Information:</h3>
        <ul style={{ listStyle: "none", margin: "0 20px 20px" }}>
          <li>
            {" "}
            <strong>Name:</strong> {userName}
          </li>
          <li>
            {" "}
            <strong>Email:</strong> {userEmail}
          </li>
          <li>
            {" "}
            <strong>Contact Number:</strong> {userContact}
          </li>
          <li>
            {" "}
            <strong>Address:</strong> {userAddress}
          </li>
          <li>
            <strong>Areas/Items for Home Cleaning Quotation:</strong>
            <ul style={{ listStyle: "none", margin: "0 20px 10px" }}>
              {homeCleaningAreas.map((area: any, index: any) => (
                <li key={index}>
                  {area.name} - {area.amount}
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <p>
          Please prepare a quote for the above-mentioned areas/items and send it
          to the customer at the earliest convenience.
        </p>
        <p>Warm regards,</p>
      </div>
    </EmailTemplate>
  );
};

export const MovingRequestEmail: React.FC<{
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  currentAddress: string;
  destinationAddress: string;
  preferredDate: string;
  // itemsForMoving: string[];
  // specialInstructions: string;
  companyName: string;
}> = ({
  customerName,
  customerEmail,
  customerPhone,
  currentAddress,
  destinationAddress,
  preferredDate,
  // itemsForMoving,

  companyName,
}) => {
  const contentStyle: React.CSSProperties = {
    backgroundColor: "white", // Content background color
    padding: "20px",
    lineHeight: "2",
  };
  return (
    <EmailTemplate subject={`New Moving Request from ${customerName}`}>
      <div style={contentStyle}>
        <p>Hello Admin,</p>
        <p>
          We have received a new moving request from the website. Please find
          the details below:
        </p>
        <h3>Customer Information:</h3>
        <ul style={{ listStyle: "none", margin: "5px 20px 20px" }}>
          <li>
            {" "}
            <strong>Name:</strong> {customerName}
          </li>
          <li>
            <strong>Email Address: </strong> {customerEmail}
          </li>
          <li>
            <strong>Phone Number: </strong> {customerPhone}
          </li>
          <li>
            <strong>Current Address: </strong> {currentAddress}
          </li>
          <li>
            {" "}
            <strong>Destination Address:</strong> {destinationAddress}
          </li>
          <li>
            {" "}
            <strong>Preferred Moving Date:</strong> {preferredDate}
          </li>
        </ul>
        {/* {itemsForMoving.length > 0 && (
          <>
            <p>List of Items for Moving:</p>
            <ul>
              {itemsForMoving.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
        {specialInstructions && (
          <p>Special Instructions: {specialInstructions}</p>
        )} */}
        <p>
          Please ensure that the moving team is informed and a quote is prepared
          for the customer based on the details provided. It would be prudent to
          reach out to the customer as soon as possible to confirm details,
          provide the quote, and schedule the move.
        </p>
        <p>Thank you,</p>
        <p>{companyName} Support Team</p>
      </div>
    </EmailTemplate>
  );
};

export const SubscriptionConfirmationEmail: React.FC<{
  customerName: string;
  serviceName: string;
  planName: string;
  startDate: string;
  endDate: string;
}> = ({ customerName, serviceName, planName, startDate, endDate }) => {
  const contentStyle: React.CSSProperties = {
    lineHeight: "2",
  };
  return (
    <EmailTemplate subject="  Your Subscription with Dibo Ruwa is Confirmed!">
      <div style={contentStyle}>
        <p>
          Hello{" "}
          <strong style={{ textTransform: "capitalize" }}>
            {customerName}
          </strong>
          ,
        </p>
        <p>
          Great choice! We&#39;re thrilled to have you onboard. Your
          subscription for {serviceName} is now confirmed. Get ready for a
          hassle-free and delightful experience.
        </p>
        <h3>Details:</h3>
        <ul style={{ listStyle: "none", margin: "5px 20px 20px" }}>
          <li>
            {" "}
            <strong>Service:</strong> {serviceName}
          </li>
          <li>
            {" "}
            <strong>Plan:</strong> {planName}
          </li>
          <li>
            <strong> Subscription Period:</strong> {startDate} - {endDate}
          </li>
        </ul>
        <p>Thank you for trusting Dibo Ruwa. We&#39;re excited to serve you!</p>
        <p>Warmly,</p>
        <p>The Dibo Ruwa Team</p>
      </div>
    </EmailTemplate>
  );
};

const DaysToSubscriptionExpiryEmail: React.FC<{
  customerName: string;
  serviceName: string;
  daysToExpiry: number;
}> = ({ customerName, serviceName, daysToExpiry }) => {
  const emailStyle: React.CSSProperties = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f0", // Background color
    padding: "20px",
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: "#007bff", // Header background color
    color: "white", // Header text color
    padding: "10px",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const contentStyle: React.CSSProperties = {
    backgroundColor: "white", // Content background color
    padding: "20px",
  };
  return (
    <div style={emailStyle}>
      <div style={headerStyle}>
        Heads up! Your Dibo Ruwa Subscription Ends in {daysToExpiry} Days
      </div>
      <div style={contentStyle}>
        <p>Hello {customerName},</p>
        <p>
          Just a quick note to remind you that your {serviceName} subscription
          with Dibo Ruwa is coming to an end in {daysToExpiry} days.
        </p>
        <p>
          Want uninterrupted service? Consider renewing your subscription. Head
          to our website or get in touch if you need any assistance.
        </p>
        <p>
          Thank you for choosing Dibo Ruwa. We hope to continue serving you!
        </p>
        <p>Best,</p>
        <p>The Dibo Ruwa Team</p>
      </div>
    </div>
  );
};
