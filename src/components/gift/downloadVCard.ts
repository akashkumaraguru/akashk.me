import { AKASH_EMAIL, AKASH_PHONE, AKASH_LINKEDIN } from './giftData';

export function downloadAkashVCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Kumaraguru;Akash;;;',
    'FN:Akash Kumaraguru',
    'TITLE:Product Designer & Builder',
    `EMAIL;TYPE=INTERNET:${AKASH_EMAIL}`,
    `TEL;TYPE=CELL:${AKASH_PHONE}`,
    `URL:${AKASH_LINKEDIN}`,
    'END:VCARD',
  ].join('\r\n');

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Akash-Kumaraguru.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
