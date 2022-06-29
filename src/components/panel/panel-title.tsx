export enum TextAlign {
  TEXT_LEFT = 'text-left',
  TEXT_CENTER = 'text-center',
  TEXT_RIGHT = 'text-right'
}

type Props = {
  title: string,
  textAlign?: TextAlign,
  className?: string
}

export const PanelTitle: React.FC<any> = ({ title, textAlign, className }: Props) => {
  const textAlignClass: TextAlign = !!textAlign ? textAlign : TextAlign.TEXT_CENTER

  return <>
    <div className={ ["bg-rose-500 text-4xl text-white font-semibold p-5 ", textAlignClass, className].join(' ')}>
      { title }
    </div>
  </>
}

export default PanelTitle;
