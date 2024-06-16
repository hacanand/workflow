'use client'
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { CONNECTIONS, EditorCanvasDefaultCardTypes } from "@/lib/constants";
import { onDragStart } from "@/lib/editor-utils";
import { EditorCanvasCardType, EditorCanvasTypes, EditorNodeType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import { TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";
import EditorCanvasIconHelper from "./editor-canvas-icon-helper";
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionContent } from "@radix-ui/react-accordion";
import RenderConnectionAccordion from "./Render-connection-accordion";
type Props = {
    nodes:EditorNodeType[]
}
const EditorCanvasSidebar = ({ nodes }: Props) => {
    //WIP :Connect DB stuff
    const{state}=useEditor()
    return (
      <aside>
        <Tabs defaultValue="actions" className="h-screen overflow-scroll pb-24">
          <TabsList className="bg-transparent">
            <TabsTrigger value="actions" className="px-2">Actions</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <Separator />
          <TabsContent value="actions" className="flex flex-col gap-4 p-4">
            {Object.entries(EditorCanvasDefaultCardTypes)
              .filter(
                ([_, cardType]) =>
                  (!nodes.length && cardType.type === "Trigger") ||
                  (nodes.length && cardType.type === "Action")
              )
              .map(([cardKey, cardValue]) => (
                <Card
                  key={cardKey}
                  draggable
                  className="w-full cursor-grab border-black bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900"
                  onDragStart={(e) => {
                    onDragStart(event, cardKey as EditorCanvasTypes);
                  }}
                  >
                      <CardHeader className="flex flex-row items-center gap-4 p-4">
                          <EditorCanvasIconHelper type={cardKey as EditorCanvasTypes} />
                          <CardTitle className='text-md'>
                              {cardKey}
                              <CardDescription>{ cardValue.description}</CardDescription>
                          </CardTitle>
                          
                      </CardHeader>
                </Card>
              ))}
                </TabsContent>
                <TabsContent value='settings' className="mt-6">
                    <div className="px-2 py-2 text-center text-xl font-bold">
                {state.editor.selectedNode.data.title}
                    </div>
                    <Accordion type='multiple'>
                        <AccordionItem value="options" className="border-y-[1px] px-2">
                            <AccordionTrigger className='!no-underline'>
                                Account
                            </AccordionTrigger>
                            <AccordionContent>
                                {CONNECTIONS.map((connection) => (
                                   <RenderConnectionAccordion key={connection.title} connection={connection} state={state}/>
                               ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </TabsContent>
        </Tabs>
      </aside>
    );
}
export default EditorCanvasSidebar