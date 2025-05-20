'use client';
import { Editor } from '@tinymce/tinymce-react';

export default function FinalArticleComponent({ topic, selectedKeywords, title, outline, selectedImage, editorData, setEditorData }: any) {
  // Log editorData to check the content being passed to the editor
  console.log("Editor data:", editorData);

  return (
    <div className="mt-6">
      <p className="text-muted-foreground mb-4">Review your inputs and click Generate to create your article using AI.</p>
      <div className="space-y-2">
        <p><strong>Topic:</strong> {topic}</p>
        {selectedKeywords.length > 0 && <p><strong>Keywords:</strong> {selectedKeywords.join(', ')}</p>}
        {title && <p><strong>Title:</strong> {title}</p>}
        {outline && <p><strong>Outline:</strong> {outline}</p>}
        {selectedImage && <img src={selectedImage.url} alt={selectedImage.title} className="w-64 rounded-md" />}
      </div>

      <label className="block mb-1 mt-6 font-medium">Generated Article</label>
      <div className="border rounded">
        <Editor
          apiKey='00p2qodli34l5l40y60yatazpx4ijbmbrl78grhcjyxpsker'
          value={editorData}
          init={{
            height: 400,
            menubar: false,
            plugins: [
              'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
              'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
            ],
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            mergetags_list: [
              { value: 'First.Name', title: 'First Name' },
              { value: 'Email', title: 'Email' },
            ],
            ai_request: (_: any, respondWith: any) =>
              respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
          }}
          onEditorChange={(content: string) => setEditorData(content)}
        />
      </div>
    </div>
  );
}
