import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import workerService from "../../core/services/worker.service";
import { workerState } from "../../state/workerState";
import InputStyle from "../common/form/InputStyle";
import Button from "../common/form/Button";

interface Propse {
  onHide: () => void;
}

const GenerateArticleModal: React.FC<Propse> = ({ onHide }) => {
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { websiteId } = useParams();
  const worker = useRecoilValue(workerState(websiteId as string));
  const onSubmit = async () => {
    try {
      await workerService.triggerWorker(worker.id, [keyword]);
      onHide();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog
      modal
      visible
      header="Generate Article"
      onHide={onHide}
      footer={<Button onClick={onSubmit}>Generate</Button>}
    >
      <InputStyle>
        <label htmlFor="wrtiersname">Enter a keyword</label>
        <InputText
          id="outlined-basic"
          placeholder="e.g SEO with ai"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
        <small id="username-help"> Please be specific as much as you can</small>
      </InputStyle>
    </Dialog>
  );
};

export default GenerateArticleModal;
