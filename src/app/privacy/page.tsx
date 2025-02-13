'use client';

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: 08/02/2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to Integrate-AI ("Company", "we", "our", "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at data@integrate-AI.tech.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Contact Forms: When you reach out to us via our contact forms, we collect your name, email address, phone number, and mailing address.</li>
            <li>Newsletter Sign-Ups: When you subscribe to our newsletter, we collect your name and email address.</li>
            <li>Transactions: When you make a payment for our services, we collect payment information necessary to process the transaction.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use personal information collected via our website for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Providing and Managing Services: To deliver and manage our services to you.</li>
            <li>Processing Transactions: To process your payments and manage your orders.</li>
            <li>Sending Promotional Materials or Newsletters: To send you marketing and promotional communications. You can opt-out of our marketing emails at any time (see "Your Privacy Rights" below).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
          <p className="text-gray-700">
            We do not share your personal information with third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Storage and Security</h2>
          <p className="text-gray-700">
            We store your personal data in a secure database. To protect your personal information, we implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Privacy Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Access: You can request access to the personal data we hold about you.</li>
            <li>Correction: You can request that we correct or update your personal data if it is inaccurate or incomplete.</li>
            <li>Deletion: You can request that we delete your personal data.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            To exercise any of these rights, please contact us at data@integrate-AI.tech. We will respond to your request in accordance with applicable data protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700">
            We use cookies and similar tracking technologies (like Google Analytics) to access or store information. We use these tools to analyze website traffic and improve your experience on our site. You can set your browser to refuse all or some browser cookies.
          </p>
        </section>
      </div>
    </main>
  );
}
