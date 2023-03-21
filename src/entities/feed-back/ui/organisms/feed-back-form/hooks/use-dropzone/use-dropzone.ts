import { useCallback, useState } from "react";

export const useDropZone = () => {
  const [isDropActive, setIsDropActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const onDragStateChange = useCallback((dragActive: boolean) => {
    setIsDropActive(dragActive);
  }, []);

  const removeFile = useCallback(
    (number: number) => {
      setFiles(files.filter((item, index) => index !== number));
    },
    [setFiles, files]
  );

  const onFilesDrop = useCallback((newFiles: File[]) => {
    if (files.length === 3 || files.length + newFiles.length > 3) return;
    setFiles((files) => [...files, ...newFiles]);
  }, []);

  return { onDragStateChange, onFilesDrop, files, removeFile };
};
