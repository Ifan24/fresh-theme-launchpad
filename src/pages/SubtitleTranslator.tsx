
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
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

  // Mock data for cost tracking
  const costData = {
    inputTokens: 1245,
    outputTokens: 845,
    totalTokens: 2090,
    estimatedCost: 0.042,
    history: [
      { id: 1, cost: 0.01, timestamp: new Date() },
      { id: 2, cost: 0.02, timestamp: new Date() },
      { id: 3, cost: 0.03, timestamp: new Date() }
    ]
  };

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
                
                <TranslationActions />
              </CardContent>
            </Card>
          </div>
          
          {/* Right column: Settings and Messages+Cost */}
          <div className="lg:col-span-5">
            <Tabs defaultValue="settings" className="w-full">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="settings" className="flex-1">Translation Settings</TabsTrigger>
                <TabsTrigger value="messages" className="flex-1">Messages & Cost</TabsTrigger>
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
                  <CardContent className="p-4 h-[580px] overflow-y-auto space-y-6">
                    {/* Cost Section */}
                    <div className="pb-4 border-b">
                      <h3 className="text-lg font-medium mb-3">Translation Cost</h3>
                      <div className="border rounded-md p-4">
                        <div className="flex justify-between mb-2">
                          <span>Input Tokens:</span>
                          <span>{costData.inputTokens.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span>Output Tokens:</span>
                          <span>{costData.outputTokens.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span>Total Tokens:</span>
                          <span>{costData.totalTokens.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span>Estimated Cost:</span>
                          <span>${costData.estimatedCost.toFixed(3)}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Messages Section */}
                    <TranslationMessages />
                    
                    {/* Cost History Section */}
                    <div className="pt-2">
                      <h4 className="text-md font-medium mb-3">Cost History</h4>
                      <div className="space-y-3">
                        {costData.history.map((batch) => (
                          <div key={batch.id} className="border rounded-md p-3">
                            <div className="flex justify-between text-sm">
                              <span>Batch #{batch.id}</span>
                              <span className="text-blue-600">${batch.cost.toFixed(3)}</span>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {batch.timestamp.toLocaleString()}
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
