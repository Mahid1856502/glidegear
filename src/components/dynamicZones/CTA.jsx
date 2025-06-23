import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import CKEditorRender from "../../common/CKEditor";

const CTA = ({ cta, button }) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 px-6 md:px-10 flex flex-col items-center justify-center text-center">
      {cta && <CKEditorRender text={cta} />}
      <Button
        className="mt-5"
        label={button.label}
        onClick={() => navigate(button?.link || "/")}
        theme={button?.theme?.theme}
      />
    </div>
  );
};

export default CTA;
