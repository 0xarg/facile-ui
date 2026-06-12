/**
 * FAQ content for the standalone /faq page.
 *
 * The Figma frame (213:5442) only fully populated the "Getting Started" category
 * (those four items use the exact Figma copy). The remaining categories shown as
 * tabs in the design — NFC Cards, Profile & Links, Shipping, Billing, Technical —
 * were placeholders, so their questions/answers are written here for the Facile
 * NFC smart-card product (compatibility, QR fallback, profile updates, shipping,
 * privacy/security, returns, team/bulk orders, etc.).
 */
export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    items: [
      {
        question: "What is Facile?",
        answer:
          "Facile is an all-in-one NFC card and digital profile platform. One tap on your card opens a fully customizable profile with all your links, contact info, and more — no app required.",
      },
      {
        question: "How does the NFC card work?",
        answer:
          "Each card has a tiny NFC chip embedded inside. When someone holds their phone near the card, the chip wakes up and instantly opens your profile in their browser — no pairing, no battery, and nothing to install.",
      },
      {
        question: "Do I need to download an app?",
        answer:
          "No app required on either end. Your card opens instantly in any mobile browser when tapped, and you manage your profile from any web browser.",
      },
      {
        question: "Can I change my profile after I receive the card?",
        answer:
          "Yes — you can update your profile anytime from your Facile dashboard. Changes go live instantly, so your card always points to your most current information.",
      },
    ],
  },
  {
    id: "nfc-cards",
    label: "NFC Cards",
    items: [
      {
        question: "Will it work with my phone?",
        answer:
          "Yes. Every iPhone from the iPhone 7 onward and virtually all modern Android phones have NFC built in and enabled by default. Just tap the card to the top-back of the device to trigger the link.",
      },
      {
        question: "What if someone's phone can't tap?",
        answer:
          "Every Facile card also includes a unique QR code on the back. If a phone can't tap — or NFC is switched off — the other person can simply open their camera and scan the code to reach the exact same profile.",
      },
      {
        question: "Will the card wear out or stop working?",
        answer:
          "No. The NFC chip is passive and has no battery or moving parts, so it won't degrade with normal use. The card is built to keep working for years of everyday tapping.",
      },
    ],
  },
  {
    id: "profile-links",
    label: "Profile & Links",
    items: [
      {
        question: "What can I add to my profile?",
        answer:
          "Add your contact details, social profiles, website, payment links, portfolio, calendar booking link, and more. Arrange and label everything exactly how you want it to appear.",
      },
      {
        question: "Can people save my contact details?",
        answer:
          "Yes. Your profile includes a one-tap \"Save Contact\" button that adds your details straight to the visitor's phone as a contact card — no typing required.",
      },
      {
        question: "Can I have more than one card on a profile?",
        answer:
          "Absolutely. You can link multiple cards to a single profile, which is handy if you want a backup card or a card in a different finish. They all point to the same up-to-date profile.",
      },
    ],
  },
  {
    id: "shipping",
    label: "Shipping",
    items: [
      {
        question: "How long does shipping take?",
        answer:
          "Cards are printed and dispatched within 2–3 business days. Standard delivery typically arrives in 5–7 business days, and you'll get tracking by email the moment your order ships.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship worldwide. International delivery times and any customs fees vary by destination, and the estimate is shown at checkout before you pay.",
      },
      {
        question: "What is your return policy?",
        answer:
          "Unused cards can be returned within 30 days for a full refund. If a card ever arrives faulty, we'll replace it free of charge — just reach out to support.",
      },
    ],
  },
  {
    id: "billing",
    label: "Billing",
    items: [
      {
        question: "Is there a subscription fee?",
        answer:
          "No. Your card is a one-time purchase and your digital profile is included free — there's no recurring subscription required to keep it working.",
      },
      {
        question: "Do you offer team or bulk orders?",
        answer:
          "Yes. We offer volume pricing and centralized management for teams, so you can order branded cards for everyone and manage profiles from one dashboard. Contact us for a quote.",
      },
      {
        question: "Which payment methods do you accept?",
        answer:
          "We accept all major credit and debit cards, plus Apple Pay and Google Pay. Every payment is processed over an encrypted, secure connection.",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical",
    items: [
      {
        question: "Is my data secure?",
        answer:
          "Yes. The NFC chip only stores a link to your profile, never your personal data. You decide exactly which details are public, and you can pause or update your profile at any moment from your account.",
      },
      {
        question: "What happens if I lose my card?",
        answer:
          "Your profile lives in your account, not on the card itself. If a card is lost, you can deactivate its link from your dashboard so it can no longer open your profile, then order a replacement.",
      },
      {
        question: "Do you sell or share my information?",
        answer:
          "Never. We don't sell your data, and your profile only shares the information you choose to make public. You stay in full control of what visitors can see.",
      },
    ],
  },
];
