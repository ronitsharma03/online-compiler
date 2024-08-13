import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const CodeRenderer = () => {
    const fullCode = useSelector((state: RootState) => state.compilerSlice.fullCode);
    const combinedCode = `
    <html>
        <style>${fullCode.css}</style>
        <body>${fullCode.html}</body>
        <script>${fullCode.javascript}</script>
    </html>
    `;

    const encodedCode = `data:text/html;charset=utf-8, ${encodeURIComponent(combinedCode)}`;
  return (
    <div className='w-full h-[calc(100dvh-70px)]'>
        <iframe className='w-full h-full' src={encodedCode} />
    </div>
  )
}

export default CodeRenderer