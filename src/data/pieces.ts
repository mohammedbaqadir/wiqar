/**
 * Placeholder catalogue — authored for the showcase, not real inventory.
 * Each piece carries its accession number, origin and the owner's standard.
 */

export type PieceKind = 'cup' | 'pen' | 'textile' | 'perfume' | 'bowl' | 'lamp';

export interface Piece {
  /** accession number, etched on the plate */
  no: string;
  name: string;
  origin: string;
  /** the owner's standard — why this piece earns its place */
  standard: string;
  kind: PieceKind;
}

export const pieces: Piece[] = [
  {
    no: 'WQ-0412',
    name: 'فنجان قهوة',
    origin: 'خزف يدوي',
    standard: 'جدار رقيق، حافة مضبوطة، وحجم يقيس القهوة لا الكوب.',
    kind: 'cup',
  },
  {
    no: 'WQ-0288',
    name: 'قلم حبر',
    origin: 'تصنيع أوروبي',
    standard: 'وزن يوازن اليد، ونتوء يساوي الشخط الذي يكتبه.',
    kind: 'pen',
  },
  {
    no: 'WQ-0153',
    name: 'منديل كتان',
    origin: 'نسيج مصري',
    standard: 'خيط طويل، حواشٍ مطوية مرتين، ولون يثبت بعد عشرين غسلة.',
    kind: 'textile',
  },
  {
    no: 'WQ-0771',
    name: 'عطر',
    origin: 'تركيب فرنسي',
    standard: 'قاعدة هادئة تبقى بعد ساعتين، بلا صراخ.',
    kind: 'perfume',
  },
  {
    no: 'WQ-0506',
    name: 'طاسة خشب',
    origin: 'خشب زيتون',
    standard: 'تجويف واحد متصل، وأثر يد بلا حرارة صنفرة.',
    kind: 'bowl',
  },
  {
    no: 'WQ-0990',
    name: 'مصباح مكتب',
    origin: 'نحاس مصقول',
    standard: 'ضوء يقع على الورق، ولا يقع على العين.',
    kind: 'lamp',
  },
];

export const leadPiece = pieces[0];
