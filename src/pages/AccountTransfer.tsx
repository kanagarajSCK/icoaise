import { Prose, SectionTitle } from "@/components/ConferenceUI";

const AccountTransfer = () => (
  <>
    <title>Account Transfer — ICAIS 2027</title>
    <meta name="description" content="Bank account transfer details for ICAIS 2027 registration fee payment. Contact the conference secretariat for the latest information." />
    <SectionTitle>Account Transfer</SectionTitle>
    <Prose>
      <p>For account transfer details to pay the ICAIS 2027 registration fee, please contact the conference secretariat. After making the transfer, share the payment screenshot along with your final paper and copyright form to the conference email below.</p>

      <div className="border border-border rounded-lg p-6 bg-muted/40 my-6 max-w-xl">
        <h3 className="font-display text-xl mb-3 text-conf-navy">Contact for Account Details</h3>
        <p><strong>Email:</strong> <a className="conf-link" href="mailto:conf.icaisee@gmail.com">conf.icaisee@gmail.com</a></p>
        <p><strong>Phone:</strong> +91-8754818524</p>
        <p><strong>Subject line:</strong> “Account Transfer Details — ICAIS 2027”</p>
      </div>

      <p className="text-conf-violet">Bank account details to be updated soon. Please write to the secretariat for the latest information.</p>
    </Prose>
  </>
);
export default AccountTransfer;
