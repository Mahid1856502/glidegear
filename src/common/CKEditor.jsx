function CKEditorRender({ text }) {
  if (text) {
    return (
      <div
        className={"max-w-full"}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }
}

export default CKEditorRender;
