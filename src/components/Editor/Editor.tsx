import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

//@ts-expect-error onchangeHandler
function Editor({handler,selectionHandler}) {
  return (
    <div>
          <div className="  justify-center flex  h-screen w-screen bg-gray-100  ">
            <div className="w-full mx-52 mt-6  shadow-lg">
                <ReactQuill
                    theme="snow"
                    modules={{toolbar:true}}
                    value="hello"
                    onChange={handler}
                    onChangeSelection={selectionHandler}
                    style={{height:'90%'}}
                    formats={ [
                      'header',
                      'bold', 'italic', 'underline', 'strike', 'blockquote',
                      'list', 'bullet', 'indent',
                      'link', 'image'
                    ]}
                />
            </div>
          </div>
    </div>
  )
}

export default Editor
