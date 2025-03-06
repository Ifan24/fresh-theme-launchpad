
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Subtitle {
  id: number;
  startTime: string;
  endTime: string;
  text: string;
}

interface SubtitlePreviewProps {
  subtitles: Subtitle[];
}

const SubtitlePreview: React.FC<SubtitlePreviewProps> = ({ subtitles }) => {
  return (
    <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      {subtitles.map((subtitle) => (
        <Card key={subtitle.id} className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-0">
            <div className="p-2 bg-muted/50 flex justify-between items-center text-xs text-muted-foreground border-b">
              <div className="font-medium">#{subtitle.id}</div>
              <div className="font-mono">{subtitle.startTime} → {subtitle.endTime}</div>
            </div>
            <div className="p-3 text-sm">
              {subtitle.text}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SubtitlePreview;
