"use client";

import { ReactNode, createContext, useContext, useState } from "react";

export type TNodeInfo = {
  Addresses: string[];
  AgentVersion: string;
  ID: string;
  ProtocolVersion: string;
  Protocols: string[];
  PublicKey: string;
};

const Context = createContext<TNodeInfo | null>(null);

export default function NodeProvider({
  children,
  _nodeInfo,
}: {
  children: ReactNode;
  _nodeInfo: TNodeInfo | null;
}) {
  const [nodeInfo] = useState<TNodeInfo | null>(_nodeInfo);
  console.log({_nodeInfo})
  return (
    <Context.Provider value={nodeInfo}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useNodeInfo = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useNodeInfo must be used inside NodeProvider");
  }
  return context;
};
