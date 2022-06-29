import PanelTitle, { TextAlign } from "./panel-title"

type Props = {
  title: string
  children: React.ReactNode
  titleAlign?: TextAlign
}

export const Panel: React.FC<any> = ({ title, children, titleAlign }: Props) => {
  return <>
    <div className="flex flex-col">
      <PanelTitle title={title} textAlign={titleAlign} />
      <div className="panel-body">
        { children }
      </div>
    </div>
  </>
}

export default Panel
