import DeltaStatic from "quill"
import Sources from "quill"
import {Editor} from './components'
import {UnprivilegedEditor} from "react-quill";


const App = () => {
    

    const handler = (content:string,delta:DeltaStatic,source:Sources,editor:UnprivilegedEditor) => {
        console.log("text-change: "+editor.getText());
    }
    const selectionHandler = (selection: any,source:Sources,editor:UnprivilegedEditor) => {
        console.log("selection: "+JSON.stringify(selection));
        console.log(editor.getSelection());
    }

    return (
        <>
            <Editor 
                handler={handler}  
                selectionHandler={selectionHandler} 
            />
        </>
    )
}

export default App;