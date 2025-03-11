
import React, { useState } from "react";
import { 
  Card,
  CardContent 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const TranslationSettings = () => {
  const [tempValue, setTempValue] = useState(0.1);
  const [activeSettingName, setActiveSettingName] = useState("Default");
  
  return (
    <div className="space-y-6">
      {/* Active Setting Badge */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">Translation Settings</h3>
        <Badge 
          variant="outline" 
          className="bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200"
        >
          {activeSettingName}
        </Badge>
      </div>
      
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="basic" className="text-sm">Basic Settings</TabsTrigger>
          <TabsTrigger value="advanced" className="text-sm">Advanced Settings</TabsTrigger>
        </TabsList>
        
        {/* Basic Settings Tab */}
        <TabsContent value="basic" className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox id="useAccountToken" />
            <div className="grid gap-1">
              <label htmlFor="useAccountToken" className="text-sm font-medium leading-none cursor-pointer">
                Use Account Token
              </label>
              <p className="text-xs text-muted-foreground">
                Use your account balance instead of personal API keys
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="estimateTokens" />
            <div className="grid gap-1">
              <label htmlFor="estimateTokens" className="text-sm font-medium leading-none cursor-pointer">
                Estimate Tokens
              </label>
              <p className="text-xs text-muted-foreground">
                Show token usage estimation before translating
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Source Language</label>
            <div className="relative">
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>English</option>
                <option>Chinese</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
              <div className="text-xs text-muted-foreground mt-1">
                Select the source language of the subtitles
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Target Language</label>
            <div className="relative">
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Chinese</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
              <div className="text-xs text-muted-foreground mt-1">
                Select the target language for the translation
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Model</label>
            <div className="relative">
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>gpt-4o-mini</option>
                <option>gpt-4o</option>
                <option>gemini-1.5-pro</option>
                <option>claude-3</option>
              </select>
              <div className="text-xs text-muted-foreground mt-1">
                Choose the LLM model to use for translation
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Batch Size</label>
              <div className="flex items-center space-x-2">
                <Input type="number" value="30" className="w-full" />
                <div className="flex items-center">
                  <Checkbox id="autoCalculate" className="mr-2" />
                  <label htmlFor="autoCalculate" className="text-xs cursor-pointer">Auto</label>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Set the number of subtitle lines to process in each batch
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Start Index</label>
              <div className="flex items-center space-x-2">
                <Input type="number" value="0" className="w-full" />
                <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded whitespace-nowrap">Jump to first empty</button>
              </div>
              <div className="text-xs text-muted-foreground">
                Specify the starting index of the subtitles to translate
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="autoSave" />
            <div className="grid gap-1">
              <label htmlFor="autoSave" className="text-sm font-medium leading-none cursor-pointer">
                Auto-save
              </label>
              <p className="text-xs text-muted-foreground">
                Automatically save the subtitle and translation when translation is complete
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="autoResume" />
            <div className="grid gap-1">
              <label htmlFor="autoResume" className="text-sm font-medium leading-none cursor-pointer">
                Auto-resume
              </label>
              <p className="text-xs text-muted-foreground">
                Automatically resume long translations
              </p>
            </div>
          </div>
        </TabsContent>
        
        {/* Advanced Settings Tab */}
        <TabsContent value="advanced" className="space-y-4">
          <Card className="border rounded-lg shadow-sm">
            <CardContent className="px-4 py-4">
              <h3 className="text-sm font-medium mb-4">Translation Mode</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox id="reflectionMode" />
                  <div className="grid gap-1">
                    <label htmlFor="reflectionMode" className="text-sm font-medium leading-none cursor-pointer">
                      Enable Reflection Mode
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Enables a two-step reflection-based translation process, or Reasoning Mode if already enabled
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="reasoningMode" />
                  <div className="grid gap-1">
                    <label htmlFor="reasoningMode" className="text-sm font-medium leading-none cursor-pointer">
                      Enable Reasoning Mode
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Shows the reasoning process during translation
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="fluentMerging" />
                  <div className="grid gap-1">
                    <label htmlFor="fluentMerging" className="text-sm font-medium leading-none cursor-pointer">
                      Enable Fluent Merging
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Allows intelligent merging between closely related subtitles for a more natural translation
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="contextMemory" />
                  <div className="grid gap-1">
                    <label htmlFor="contextMemory" className="text-sm font-medium leading-none cursor-pointer">
                      Enable Context Memory
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Incorporates previous translations to enhance consistency across subtitles
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border rounded-lg shadow-sm">
            <CardContent className="px-4 py-4">
              <h3 className="text-sm font-medium mb-4">Prompt Configuration</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Prompt</label>
                  <Textarea 
                    className="min-h-[100px]"
                    placeholder="Enter custom translation prompt..."
                    defaultValue="You are an experienced subtitle translator who has worked extensively with streaming platforms like Netflix and HBO. Your task involves translating <SourceLanguage>/<TargetLanguage> subtitles into <TargetLanguage>. Your translations should capture both the literal meaning and the cultural nuances of the dialogue in a single efficient pass."
                  />
                  <div className="text-xs text-muted-foreground">
                    Customize the instruction prompt sent to the AI
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Additional Context</label>
                  <Textarea 
                    className="min-h-[80px]"
                    placeholder="Enter additional context about the video content..."
                  />
                  <div className="text-xs text-muted-foreground">
                    Provide any additional context or information about the video to assist the translation process
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border rounded-lg shadow-sm">
            <CardContent className="px-4 py-4">
              <h3 className="text-sm font-medium mb-4">Few-Shot Examples</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox id="useFewShot" />
                  <div className="grid gap-1">
                    <label htmlFor="useFewShot" className="text-sm font-medium leading-none cursor-pointer">
                      Use Few-Shot Examples
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Few-shot examples provide the AI model with a small set of example translations to improve the quality of the output
                    </p>
                  </div>
                </div>
                
                <Textarea 
                  className="min-h-[150px] mt-3"
                  placeholder="Enter few-shot examples in JSON format..."
                  defaultValue={`{\n  "input": [\n    "current_batch_subtitles": [\n      {\n        "index": 305,\n        "original_text": "now we have it now we just want to calculate the distance between the cars and"\n      },\n      {\n        "index": 306,\n        "original_text": "the player and we're going to calculate the distance"\n      }\n    ]\n  ]\n}`}
                />
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded mt-2">
                  Generate Examples
                </button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border rounded-lg shadow-sm">
            <CardContent className="px-4 py-4">
              <h3 className="text-sm font-medium mb-4">Model Parameters</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Temperature: {tempValue.toFixed(1)}</label>
                <Slider 
                  defaultValue={[0.1]} 
                  max={1} 
                  step={0.1}
                  onValueChange={(value) => setTempValue(value[0])}
                />
                <div className="text-xs text-muted-foreground">
                  Control the creativity and randomness of the generated translations. Lower values result in more predictable output, while higher values encourage more diverse translations
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 justify-between">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
          Apply Settings
        </button>
        <div className="flex gap-2">
          <button 
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
            onClick={() => {
              // In a real app, you would save the current settings here
              // For demo purposes, we're just updating the name
              const newName = prompt("Enter setting name:", activeSettingName);
              if (newName) setActiveSettingName(newName);
            }}
          >
            Save Settings
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
            Manage Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslationSettings;
