
function downloadGame() {
    const link    = window.document.createElement('a');
    link.href     = `src/game/Pokemon-YellowVersion.gbc`;
    link.download = `gbc`;
    link.click();
}
    
function downloadEmulator() {
    const link    = window.document.createElement('a');
    link.href     = `src/game/VisualBoyAdvance.rar`;
    link.download = `rar`;
    link.click();
}