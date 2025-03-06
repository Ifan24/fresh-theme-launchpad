
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import SubtitlePreview from "@/components/subtitle/SubtitlePreview";
import TranslationSettings from "@/components/subtitle/TranslationSettings";
import TranslationMessages from "@/components/subtitle/TranslationMessages";
import TranslationActions from "@/components/subtitle/TranslationActions";

const SubtitleTranslator = () => {
  const [activeTab, setActiveTab] = useState("subtitles");

  // Mock data for demo purposes
  const mockSubtitles = [
    { id: 1, startTime: "00:00:00.000", endTime: "00:00:01.820", text: "One year ago, this unbelievable video of Will Smith saying spaghetti took the world by storm." },
    { id: 2, startTime: "00:00:04.240", endTime: "00:00:06.320", text: "We humans joked about it. We could really tell that it was fake, and at that point," },
    { id: 3, startTime: "00:00:08.119", endTime: "00:00:11.019", text: "nobody was really afraid. But fast forward one year later, and generative AI tech has taken" },
    { id: 4, startTime: "00:00:13.219", endTime: "00:00:17.000", text: "Attachment" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto pt-20 px-4 pb-10">
        <h1 className="text-2xl font-bold mb-6">Subtitle Translator</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column: Subtitles */}
          <div className="lg:col-span-7">
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="mb-4 flex items-center">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      s-wild new AI tech you can try right now.mp4
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <SubtitlePreview subtitles={mockSubtitles} />
                </div>
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">Attachment</h3>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <Input type="file" className="cursor-pointer" />
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center transition-colors">
                      Save
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center transition-colors">
                      Delete
                    </button>
                  </div>
                  
                  <TranslationActions />
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex flex-col space-y-2">
                      <label className="text-sm font-medium">Export Format</label>
                      <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>SRT</option>
                        <option>VTT</option>
                        <option>JSON</option>
                      </select>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <label className="text-sm font-medium">Download Mode</label>
                      <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>Translated Only</option>
                        <option>Original + Translated</option>
                        <option>All Subtitles</option>
                      </select>
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md text-sm flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Subtitles
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right column: Settings and Messages */}
          <div className="lg:col-span-5">
            <Tabs defaultValue="settings" className="w-full">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="settings" className="flex-1">Translation Settings</TabsTrigger>
                <TabsTrigger value="messages" className="flex-1">Messages</TabsTrigger>
                <TabsTrigger value="cost" className="flex-1">Cost</TabsTrigger>
              </TabsList>
              
              <TabsContent value="settings" className="mt-0">
                <Card>
                  <CardContent className="p-4">
                    <TranslationSettings />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="messages" className="mt-0">
                <Card>
                  <CardContent className="p-4 h-[500px] overflow-y-auto">
                    <TranslationMessages />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="cost" className="mt-0">
                <Card>
                  <CardContent className="p-4 h-[500px] overflow-y-auto">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Translation Cost</h3>
                      <div className="border rounded-md p-4">
                        <div className="flex justify-between mb-2">
                          <span>Input Tokens:</span>
                          <span>1,245</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span>Output Tokens:</span>
                          <span>845</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span>Total Tokens:</span>
                          <span>2,090</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span>Estimated Cost:</span>
                          <span>$0.042</span>
                        </div>
                      </div>
                      
                      <h4 className="text-md font-medium mt-6">Cost History</h4>
                      <div className="space-y-3">
                        {[1, 2, 3].map((batch) => (
                          <div key={batch} className="border rounded-md p-3">
                            <div className="flex justify-between text-sm">
                              <span>Batch #{batch}</span>
                              <span className="text-blue-600">${(0.01 * batch).toFixed(3)}</span>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {new Date().toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubtitleTranslator;
