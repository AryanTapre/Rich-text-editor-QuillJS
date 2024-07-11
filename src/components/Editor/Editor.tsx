import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

//@ts-expect-error onchangeHandler
function Editor({handler,selectionHandler,value}) {
  return (
    <div>
          <div className="justify-center flex  h-screen w-screen bg-gray-100  ">
            <div className="w-full mx-52 mt-6  shadow-lg">
                <ReactQuill
                    theme="snow"
                    modules={{toolbar:[
                      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                      [{ 'font': [] }],
                      ['bold', 'italic', 'underline'],
                      [{ 'list': 'ordered'}, { 'list': 'bullet' },{ 'list': 'check' }],
                      [{ 'script': 'sub'}, { 'script': 'super' }], 
                      [{ 'indent': '-1'}, { 'indent': '+1' }],
                      ['link', 'image','video', 'formula'],
                      [{'color':[]},{'background':[]}],
                      ['blockquote', 'code-block'],
                      [{ 'header': 1 }, { 'header': 2 }],   
                      [{ 'align': [] }],
                      
                    ]}}
                    value={value}
                    onChange={handler}
                    onChangeSelection={selectionHandler}
                    style={{height:'90%'}}
                    
                />
            </div>
          </div>
    </div>
  )
}

export default Editor
