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
      body: 'text-sm-body md:text-md-body lg:text-lg-body',
      p: 'lg:text-lg-p md:text-md-p text-sm-p',
      p2: 'lg:text-lg-p-2 md:text-md-p-2 text-sm-p-2',
      'form-title': 'text-[8px] md:text-[10px] lg:text-[12px]',
      button: 'text-btn font-obvs',
    }[type]
  }
  return (
    {
      h1: '',
      h2: 'uppercase text-sm-h2 md:text-md-h2 lg:text-lg-h2 font-bold font-obvs',
      h3: 'lg:text-lg-h3 md:text-md-h3 text-sm-h3 font-bold font-obvs uppercase italic',
      h4: '',
      h5: '',
      h6: '',
      p: 'lg:text-lg-p md:text-md-p text-sm-p',
      label: '',
      span: '',
      div: '',
    }[tag] || ''
  )
}
