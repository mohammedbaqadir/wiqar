/**
 * Placeholder catalogue — authored for development; replaced by the store's API.
 */

export type PieceKind = 'cup' | 'pen' | 'textile' | 'perfume' | 'bowl' | 'lamp';

export interface Piece {
  /** accession number, etched on the tag */
  no: string;
  name: string;
  origin: string;
  /** the owner's standard — why this piece is in the shop */
  standard: string;
  kind: PieceKind;
  /** price in SAR */
  price: number;
  /** optional compare-at price (scarcity/sale state) */
  compareAt?: number;
  /** last units — the one red */
  lowStock?: number;
}

export const pieces: Piece[] = [
  {
    no: 'WQ-0412',
    name: 'فنجان قهوة',
    origin: 'خزف يدوي',
    standard: 'جدار رقيق، حافة مضبوطة، وحجم يقيس القهوة لا الكوب.',
    kind: 'cup',
    price: 174,
    lowStock: 3,
  },
  {
    no: 'WQ-0288',
    name: 'قلم حبر',
    origin: 'تصنيع أوروبي',
    standard: 'وزن يوازن اليد، ونتوء يساوي الشخط الذي يكتبه.',
    kind: 'pen',
    price: 420,
    compareAt: 495,
  },
  {
    no: 'WQ-0153',
    name: 'منديل كتان',
    origin: 'نسيج مصري',
    standard: 'خيط طويل، حواشٍ مطوية مرتين، ولون يثبت بعد عشرين غسلة.',
    kind: 'textile',
    price: 96,
  },
  {
    no: 'WQ-0771',
    name: 'عطر',
    origin: 'تركيب فرنسي',
    standard: 'قاعدة هادئة تبقى بعد ساعتين، بلا صراخ.',
    kind: 'perfume',
    price: 340,
  },
  {
    no: 'WQ-0506',
    name: 'طاسة خشب',
    origin: 'خشب زيتون',
    standard: 'تجويف واحد متصل، وأثر يد بلا حرارة صنفرة.',
    kind: 'bowl',
    price: 210,
  },
  {
    no: 'WQ-0990',
    name: 'مصباح مكتب',
    origin: 'نحاس مصقول',
    standard: 'ضوء يقع على الورق، ولا يقع على العين.',
    kind: 'lamp',
    price: 680,
    lowStock: 2,
  },
];

export const leadPiece = pieces[0];
