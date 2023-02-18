import { useCallback, useState } from "react";

export const useDropZone = () => {
  const [isDropActive, setIsDropActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const onDragStateChange = useCallback((dragActive: boolean) => {
    setIsDropActive(dragActive);
  }, []);

  const onFilesDrop = useCallback((newFiles: File[]) => {
    const prevFiles: File[] = files;
    newFiles.forEach((file) => prevFiles.push(file));
    setFiles(prevFiles);
  }, []);

  return { onDragStateChange, onFilesDrop, files };
};
