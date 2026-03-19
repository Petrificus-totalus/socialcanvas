import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, business, enquiry } = await request.json();

    if (!name || !email || !enquiry) {
      return Response.json(
        { error: "Name, email and enquiry are required." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Social Canvas <onboarding@resend.dev>",
      to: ["alex@socialcanvas.com.au"],
      subject: `Enquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>
          <p><strong>Business:</strong> ${business || "-"}</p>
          <p><strong>Enquiry:</strong></p>
          <p>${(enquiry || "").replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { error: error?.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
