
import React from "react";

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
    <div className="space-y-4">
      {subtitles.map((subtitle) => (
        <div key={subtitle.id} className="bg-muted p-4 rounded-md">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <div>{subtitle.id}</div>
            <div>{subtitle.startTime} --&gt; {subtitle.endTime}</div>
          </div>
          <div className="text-foreground">
            {subtitle.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubtitlePreview;
