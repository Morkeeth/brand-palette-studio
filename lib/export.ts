// Export functionality for vibe cards

import { toPng } from 'html-to-image';

export async function exportVibeCard(elementId: string = 'vibe-card-export'): Promise<void> {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error('Element not found for export');
    return;
  }

  try {
    // Generate the image
    const dataUrl = await toPng(element, {
      quality: 1,
      pixelRatio: 2, // Higher quality export
      cacheBust: true,
    });

    // Create download link
    const link = document.createElement('a');
    link.download = `vibe-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Error exporting vibe card:', error);
    alert('Failed to export image. Please try again.');
  }
}

