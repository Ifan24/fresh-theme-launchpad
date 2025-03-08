
import React from "react";
import { 
  Download, 
  Upload, 
  Languages, 
  ArrowUp, 
  X, 
  Save, 
  Trash2 
} from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const TranslationActions = () => {
  return (
    <div className="space-y-6 mt-6">
      {/* File upload section */}
      <div className="bg-slate-100 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
        <h3 className="text-sm font-medium mb-3">Subtitle File</h3>
        <div className="flex items-center gap-2">
          <label 
            htmlFor="subtitle-file" 
            className="flex-1 flex items-center justify-center gap-2 h-10 px-4 py-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-md border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
          >
            <Upload className="h-4 w-4" />
            <span className="text-sm">Choose File</span>
            <input 
              id="subtitle-file" 
              type="file" 
              className="hidden" 
              accept=".srt,.vtt,.sub,.sbv"
            />
          </label>
          
          <button className="inline-flex items-center justify-center h-10 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm transition-colors">
            <Save className="h-4 w-4 mr-2" />
            Save
          </button>
          
          <button className="inline-flex items-center justify-center h-10 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-md text-sm transition-colors">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </button>
        </div>
      </div>
      
      {/* Translation actions */}
      <div className="grid grid-cols-3 gap-3">
        <button className="flex-1 inline-flex items-center justify-center h-10 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm transition-colors">
          <Languages className="h-4 w-4 mr-2" />
          Translate
        </button>
        
        <button className="flex-1 inline-flex items-center justify-center h-10 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md text-sm transition-colors">
          <ArrowUp className="h-4 w-4 mr-2" />
          Fill Missing
        </button>
        
        <button className="flex-1 inline-flex items-center justify-center h-10 px-4 py-2 bg-slate-500 hover:bg-slate-600 text-white rounded-md text-sm transition-colors">
          <X className="h-4 w-4 mr-2" />
          Stop
        </button>
      </div>
      
      {/* Export options */}
      <div className="bg-slate-100 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 space-y-4">
        <h3 className="text-sm font-medium mb-1">Export Options</h3>
        
        <div className="space-y-3">
          <div>
            <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">
              Export Format
            </label>
            <Select defaultValue="srt">
              <SelectTrigger className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                <SelectValue placeholder="Select Format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="srt">SRT</SelectItem>
                <SelectItem value="vtt">VTT</SelectItem>
                <SelectItem value="json">JSON</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">
              Download Mode
            </label>
            <Select defaultValue="translated">
              <SelectTrigger className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                <SelectValue placeholder="Select Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="translated">Translated Only</SelectItem>
                <SelectItem value="both">Original + Translated</SelectItem>
                <SelectItem value="all">All Subtitles</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {/* Download button */}
      <button className="w-full inline-flex items-center justify-center h-12 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium transition-colors">
        <Download className="h-5 w-5 mr-2" />
        Download Subtitles
      </button>
    </div>
  );
};

export default TranslationActions;
