import { styled } from "@shared/ui";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { isTupleTypeNode } from "typescript";

type TContainerProps = {
  isDragActive: boolean;
  isNotDesktop: boolean;
  width: number;
};

const Container = styled.div<TContainerProps>`
  width: 98%;
  height: ${({ theme }) => theme.spacing(8)}px;
  border-radius: 5px;
  border: 2px dotted ${({ theme }) => theme.palette.accent.primary};
  background-color: ${({ theme, isDragActive }) =>
    isDragActive
      ? theme.palette.accent.lightGreen
      : theme.palette.background.quaternary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

export type TDropZoneProps = {
  onDragStateChange?: (isDragActive: boolean) => void;
  onDrop?: () => void;
  onDragIn?: () => void;
  onDrag?: () => void;
  onDragOut?: () => void;
  onFilesDrop?: (files: File[]) => void;
  isNotDesktop: boolean;
  width: number;
};

export const DropZone = React.memo(
  (props: React.PropsWithChildren<TDropZoneProps>) => {
    const {
      onDrag,
      onDragIn,
      onDragOut,
      onDragStateChange,
      onDrop,
      onFilesDrop,
      children,
      isNotDesktop,
      width,
    } = props;
    const [isDragActive, setIsDragActive] = useState(false);
    const dropZoneRef = useRef<null | HTMLDivElement>(null);

    const handleDragIn = useCallback(
      (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
        onDragIn?.();

        if (event.dataTransfer!.items && event.dataTransfer!.items.length > 0) {
          setIsDragActive(true);
        }
      },
      [onDragIn]
    );

    const handleDragOut = useCallback(
      (event: DragEvent) => {
        event.stopPropagation();
        event.preventDefault();

        onDragOut?.();
        setIsDragActive(false);
      },
      [onDragOut]
    );

    const handleDrag = useCallback(
      (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
        onDrag?.();
        if (!isDragActive) {
          setIsDragActive(true);
        }
      },
      [onDrag, isDragActive]
    );

    const handleDrop = useCallback(
      (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();

        setIsDragActive(false);

        onDrop?.();
        if (event.dataTransfer!.files && event.dataTransfer!.files.length > 0) {
          const filesToUpload: File[] = [];
          for (let i = 0; i < event.dataTransfer!.files.length; i++) {
            filesToUpload.push(event.dataTransfer!.files.item(i)!);
          }
          onFilesDrop?.(filesToUpload);
          event.dataTransfer!.clearData();
        }
      },
      [onDrop, onFilesDrop]
    );

    useEffect(() => {
      onDragStateChange?.(isDragActive);
    }, [isDragActive]);

    useEffect(() => {
      const tempZoneRef = dropZoneRef?.current;
      if (tempZoneRef) {
        tempZoneRef.addEventListener("dragenter", handleDragIn);
        tempZoneRef.addEventListener("dragleave", handleDragOut);
        tempZoneRef.addEventListener("dragover", handleDrag);
        tempZoneRef.addEventListener("drop", handleDrop);
      }
      return () => {
        tempZoneRef?.removeEventListener("dragenter", handleDragIn);
        tempZoneRef?.removeEventListener("dragleave", handleDragOut);
        tempZoneRef?.removeEventListener("dragover", handleDrag);
        tempZoneRef?.removeEventListener("drop", handleDrop);
      };
    }, []);

    return (
      <Container
        ref={dropZoneRef}
        isDragActive={isDragActive}
        isNotDesktop={isNotDesktop}
        width={width}
      >
        {children}
      </Container>
    );
  }
);
