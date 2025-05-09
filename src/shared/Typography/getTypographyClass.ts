export function getTypographyClass({
  tag,
  type,
}: {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'span' | 'div'
  type?: string
}) {
  if (type) {
    return {
      'chip-example': 'text-lg-chip-sm md:text-lg-chip-sm lg:text-lg-chip-sm',
      body: 'text-[16px] md:text-[24px] ',
      'body-s': 'text-[9px] md:text-[12px]',
      p: '',
      p2: 'lg:text-lg-p-2 md:text-md-p-2 text-sm-p-2',
      'form-title': 'text-[8px] md:text-[10px] lg:text-[12px]',
      button: 'text-btn font-obvs',
      s1: 'text-[32px] font-regular',
      caption: 'text-[14px] text-white/80',
    }[type]
  }
  return (
    {
      h1: '',
      h2: 'uppercase text-[36px]  lg:text-[48px] lg:leading-[78px] font-bold font-obvs',
      h3: 'uppercase font-bold text-[24px]',
      h4: '',
      h5: '',
      h6: '',
      p: '',
      label: '',
      span: '',
      div: '',
    }[tag] || ''
  )
}
