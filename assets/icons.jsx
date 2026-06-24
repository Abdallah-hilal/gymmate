/* GymMate icon set — Lucide-style (24×24, 2px stroke, round caps/joins).
   Functional UI glyphs only. Exposed on window.GMIcons for kits & slides. */
(function () {
  const S = (paths, extra) => function Icon(props) {
    const { size = 20, strokeWidth = 2, className = '', style, ...rest } = props || {};
    return React.createElement(
      'svg',
      {
        width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
        stroke: 'currentColor', strokeWidth, strokeLinecap: 'round',
        strokeLinejoin: 'round', className, style, ...rest,
      },
      paths.map((d, i) => React.createElement(d.c || 'path', { key: i, ...(d.c ? d : { d }) }))
    );
  };

  window.GMIcons = {
    Pulse: S(['M3 12h4l2-7 4 14 2-7h6']),
    Users: S(['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', { c: 'circle', cx: 9, cy: 7, r: 4 }, 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']),
    TrendingUp: S(['M22 7l-8.5 8.5-5-5L2 17', 'M16 7h6v6']),
    Loop: S(['M21 12a9 9 0 1 1-3-6.7', 'M21 4v5h-5']),
    Bell: S(['M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9', 'M13.73 21a2 2 0 0 1-3.46 0']),
    Search: S([{ c: 'circle', cx: 11, cy: 11, r: 7 }, 'M21 21l-4.3-4.3']),
    Settings: S([{ c: 'circle', cx: 12, cy: 12, r: 3 }, 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.17V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 14H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 3.6V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 2.4 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 20.4 9v.09a1.65 1.65 0 0 0 1.51 2.4H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z']),
    Message: S(['M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z']),
    Zap: S(['M13 2L3 14h9l-1 8 10-12h-9l1-8z']),
    Calendar: S([{ c: 'rect', x: 3, y: 4, width: 18, height: 18, rx: 2 }, 'M16 2v4', 'M8 2v4', 'M3 10h18']),
    CreditCard: S([{ c: 'rect', x: 2, y: 5, width: 20, height: 14, rx: 2 }, 'M2 10h20']),
    Check: S(['M20 6L9 17l-5-5']),
    ArrowRight: S(['M5 12h14', 'M13 6l6 6-6 6']),
    ArrowUpRight: S(['M7 17L17 7', 'M7 7h10v10']),
    Plus: S(['M12 5v14', 'M5 12h14']),
    Dots: S([{ c: 'circle', cx: 12, cy: 12, r: 1 }, { c: 'circle', cx: 19, cy: 12, r: 1 }, { c: 'circle', cx: 5, cy: 12, r: 1 }]),
    Filter: S(['M22 3H2l8 9.46V19l4 2v-8.54L22 3z']),
    Logout: S(['M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', 'M16 17l5-5-5-5', 'M21 12H9']),
    Star: S(['M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z']),
    Shield: S(['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z']),
    Activity: S(['M22 12h-4l-3 9L9 3l-3 9H2']),
  };
})();
