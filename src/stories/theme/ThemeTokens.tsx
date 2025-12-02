import React from 'react';

interface ColorToken {
  name: string;
  cssVar: string;
  description: string;
  tailwindClasses: string[];
  usage?: string;
  palette?: {
    lighter: Array<{ color: string; label: string }>;
    darker: Array<{ color: string; label: string }>;
  };
}

interface ColorGroup {
  title: string;
  description: string;
  tokens: ColorToken[];
}

const colorGroups: ColorGroup[] = [
  {
    title: 'Base Colors',
    description: 'Foundation colors for layouts and content',
    tokens: [
      {
        name: 'Background',
        cssVar: '--color-background',
        description: 'Main background (white)',
        tailwindClasses: ['bg-background', 'text-background'],
        usage: 'Body, main containers',
        palette: {
          lighter: [
            { color: 'rgb(255, 255, 255)', label: 'white' }, // actual
            { color: 'rgb(249, 250, 251)', label: 'gray-50' },
          ],
          darker: [
            { color: 'rgb(243, 244, 246)', label: 'gray-100' },
            { color: 'rgb(229, 231, 235)', label: 'gray-200' },
          ],
        },
      },
      {
        name: 'Foreground',
        cssVar: '--color-foreground',
        description: 'Main text (gray-800)',
        tailwindClasses: ['bg-foreground', 'text-foreground'],
        usage: 'Text, icons',
        palette: {
          lighter: [
            { color: 'rgb(75, 85, 99)', label: 'gray-600' },
            { color: 'rgb(55, 65, 81)', label: 'gray-700' },
          ],
          darker: [
            { color: 'rgb(31, 41, 55)', label: 'gray-800' }, // actual
            { color: 'rgb(17, 24, 39)', label: 'gray-900' },
          ],
        },
      },
      {
        name: 'Card',
        cssVar: '--color-card',
        description: 'Card background (white)',
        tailwindClasses: ['bg-card'],
        usage: 'Cards, panels',
      },
      {
        name: 'Card Foreground',
        cssVar: '--color-card-foreground',
        description: 'Text on cards (gray-800)',
        tailwindClasses: ['text-card-foreground'],
        usage: 'Text inside cards',
      },
    ],
  },
  {
    title: 'Brand Colors',
    description: 'Primary brand colors and semantic variants with extended palettes',
    tokens: [
      {
        name: 'Primary',
        cssVar: '--color-primary',
        description: 'Primary brand color (gray-800)',
        tailwindClasses: ['bg-primary', 'text-primary', 'border-primary'],
        usage: 'Buttons, links, highlights',
        palette: {
          lighter: [
            { color: 'rgb(156, 163, 175)', label: 'gray-400' },
            { color: 'rgb(107, 114, 128)', label: 'gray-500' },
          ],
          darker: [
            { color: 'rgb(31, 41, 55)', label: 'gray-800' }, // actual primary
            { color: 'rgb(17, 24, 39)', label: 'gray-900' },
          ],
        },
      },
      {
        name: 'Primary Foreground',
        cssVar: '--color-primary-foreground',
        description: 'Text on primary (gray-50)',
        tailwindClasses: ['text-primary-foreground'],
        usage: 'Text on primary buttons',
        palette: {
          lighter: [
            { color: 'rgb(255, 255, 255)', label: 'white' },
            { color: 'rgb(249, 250, 251)', label: 'gray-50' }, // actual
          ],
          darker: [
            { color: 'rgb(243, 244, 246)', label: 'gray-100' },
            { color: 'rgb(229, 231, 235)', label: 'gray-200' },
          ],
        },
      },
      {
        name: 'Secondary',
        cssVar: '--color-secondary',
        description: 'Secondary variant (gray-100)',
        tailwindClasses: ['bg-secondary', 'text-secondary'],
        usage: 'Secondary buttons, badges',
        palette: {
          lighter: [
            { color: 'rgb(255, 255, 255)', label: 'white' },
            { color: 'rgb(249, 250, 251)', label: 'gray-50' },
          ],
          darker: [
            { color: 'rgb(243, 244, 246)', label: 'gray-100' }, // actual
            { color: 'rgb(229, 231, 235)', label: 'gray-200' },
          ],
        },
      },
      {
        name: 'Secondary Foreground',
        cssVar: '--color-secondary-foreground',
        description: 'Text on secondary (gray-800)',
        tailwindClasses: ['text-secondary-foreground'],
        usage: 'Text on secondary elements',
      },
      {
        name: 'Muted',
        cssVar: '--color-muted',
        description: 'Subtle, muted color (gray-100)',
        tailwindClasses: ['bg-muted', 'text-muted'],
        usage: 'Disabled states, subtle backgrounds',
        palette: {
          lighter: [
            { color: 'rgb(255, 255, 255)', label: 'white' },
            { color: 'rgb(249, 250, 251)', label: 'gray-50' },
          ],
          darker: [
            { color: 'rgb(243, 244, 246)', label: 'gray-100' }, // actual
            { color: 'rgb(229, 231, 235)', label: 'gray-200' },
          ],
        },
      },
      {
        name: 'Muted Foreground',
        cssVar: '--color-muted-foreground',
        description: 'Muted text (gray-500)',
        tailwindClasses: ['text-muted-foreground'],
        usage: 'Help text, captions',
        palette: {
          lighter: [
            { color: 'rgb(209, 213, 219)', label: 'gray-300' },
            { color: 'rgb(156, 163, 175)', label: 'gray-400' },
          ],
          darker: [
            { color: 'rgb(107, 114, 128)', label: 'gray-500' }, // actual
            { color: 'rgb(75, 85, 99)', label: 'gray-600' },
          ],
        },
      },
      {
        name: 'Accent',
        cssVar: '--color-accent',
        description: 'Accent/highlight color',
        tailwindClasses: ['bg-accent', 'text-accent'],
        usage: 'Hover states, highlights',
      },
      {
        name: 'Accent Foreground',
        cssVar: '--color-accent-foreground',
        description: 'Text on accent',
        tailwindClasses: ['text-accent-foreground'],
        usage: 'Text on accent backgrounds',
      },
      {
        name: 'Destructive',
        cssVar: '--color-destructive',
        description: 'Danger/error color (red-600)',
        tailwindClasses: ['bg-destructive', 'text-destructive', 'border-destructive'],
        usage: 'Error messages, delete buttons',
        palette: {
          lighter: [
            { color: 'rgb(248, 113, 113)', label: 'red-400' },
            { color: 'rgb(239, 68, 68)', label: 'red-500' },
          ],
          darker: [
            { color: 'rgb(220, 38, 38)', label: 'red-600' }, // actual
            { color: 'rgb(185, 28, 28)', label: 'red-700' },
          ],
        },
      },
    ],
  },
  {
    title: 'Borders & States',
    description: 'Border colors and interactive states',
    tokens: [
      {
        name: 'Border',
        cssVar: '--color-border',
        description: 'Default border (gray-200)',
        tailwindClasses: ['border-border', 'bg-border'],
        usage: 'All borders, dividers',
        palette: {
          lighter: [
            { color: 'rgb(249, 250, 251)', label: 'gray-50' },
            { color: 'rgb(243, 244, 246)', label: 'gray-100' },
          ],
          darker: [
            { color: 'rgb(229, 231, 235)', label: 'gray-200' }, // actual
            { color: 'rgb(209, 213, 219)', label: 'gray-300' },
          ],
        },
      },
      {
        name: 'Input',
        cssVar: '--color-input',
        description: 'Input border (gray-200)',
        tailwindClasses: ['border-input', 'bg-input'],
        usage: 'Input fields, form elements',
        palette: {
          lighter: [
            { color: 'rgb(249, 250, 251)', label: 'gray-50' },
            { color: 'rgb(243, 244, 246)', label: 'gray-100' },
          ],
          darker: [
            { color: 'rgb(229, 231, 235)', label: 'gray-200' }, // actual
            { color: 'rgb(209, 213, 219)', label: 'gray-300' },
          ],
        },
      },
      {
        name: 'Ring',
        cssVar: '--color-ring',
        description: 'Focus ring (gray-400)',
        tailwindClasses: ['ring-ring', 'outline-ring'],
        usage: 'Focus states (accessibility)',
        palette: {
          lighter: [
            { color: 'rgb(229, 231, 235)', label: 'gray-200' },
            { color: 'rgb(209, 213, 219)', label: 'gray-300' },
          ],
          darker: [
            { color: 'rgb(156, 163, 175)', label: 'gray-400' }, // actual
            { color: 'rgb(107, 114, 128)', label: 'gray-500' },
          ],
        },
      },
    ],
  },
  {
    title: 'Chart Colors',
    description: 'Colors for data visualization with extended palettes',
    tokens: [
      { 
        name: 'Chart 1', 
        cssVar: '--color-chart-1', 
        description: 'First chart color (orange-500)', 
        tailwindClasses: ['bg-chart-1', 'text-chart-1'], 
        usage: 'Graphs, charts',
        palette: {
          lighter: [
            { color: 'rgb(253, 186, 116)', label: 'orange-300' },
            { color: 'rgb(251, 146, 60)', label: 'orange-400' },
          ],
          darker: [
            { color: 'rgb(249, 115, 22)', label: 'orange-500' }, // actual
            { color: 'rgb(234, 88, 12)', label: 'orange-600' },
          ],
        },
      },
      { 
        name: 'Chart 2', 
        cssVar: '--color-chart-2', 
        description: 'Second chart color (teal-500)', 
        tailwindClasses: ['bg-chart-2', 'text-chart-2'], 
        usage: 'Graphs, charts',
        palette: {
          lighter: [
            { color: 'rgb(94, 234, 212)', label: 'teal-300' },
            { color: 'rgb(45, 212, 191)', label: 'teal-400' },
          ],
          darker: [
            { color: 'rgb(20, 184, 166)', label: 'teal-500' }, // actual
            { color: 'rgb(13, 148, 136)', label: 'teal-600' },
          ],
        },
      },
      { 
        name: 'Chart 3', 
        cssVar: '--color-chart-3', 
        description: 'Third chart color (slate-600)', 
        tailwindClasses: ['bg-chart-3', 'text-chart-3'], 
        usage: 'Graphs, charts',
        palette: {
          lighter: [
            { color: 'rgb(148, 163, 184)', label: 'slate-400' },
            { color: 'rgb(100, 116, 139)', label: 'slate-500' },
          ],
          darker: [
            { color: 'rgb(71, 85, 105)', label: 'slate-600' }, // actual
            { color: 'rgb(51, 65, 85)', label: 'slate-700' },
          ],
        },
      },
      { 
        name: 'Chart 4', 
        cssVar: '--color-chart-4', 
        description: 'Fourth chart color (yellow-400)', 
        tailwindClasses: ['bg-chart-4', 'text-chart-4'], 
        usage: 'Graphs, charts',
        palette: {
          lighter: [
            { color: 'rgb(254, 240, 138)', label: 'yellow-200' },
            { color: 'rgb(253, 224, 71)', label: 'yellow-300' },
          ],
          darker: [
            { color: 'rgb(250, 204, 21)', label: 'yellow-400' }, // actual
            { color: 'rgb(234, 179, 8)', label: 'yellow-500' },
          ],
        },
      },
      { 
        name: 'Chart 5', 
        cssVar: '--color-chart-5', 
        description: 'Fifth chart color (amber-400)', 
        tailwindClasses: ['bg-chart-5', 'text-chart-5'], 
        usage: 'Graphs, charts',
        palette: {
          lighter: [
            { color: 'rgb(253, 230, 138)', label: 'amber-200' },
            { color: 'rgb(252, 211, 77)', label: 'amber-300' },
          ],
          darker: [
            { color: 'rgb(251, 191, 36)', label: 'amber-400' }, // actual
            { color: 'rgb(245, 158, 11)', label: 'amber-500' },
          ],
        },
      },
    ],
  },
  {
    title: 'Sidebar Colors',
    description: 'Navigation and sidebar specific colors',
    tokens: [
      { name: 'Sidebar', cssVar: '--color-sidebar', description: 'Sidebar background', tailwindClasses: ['bg-sidebar'], usage: 'Sidebar background' },
      { name: 'Sidebar Foreground', cssVar: '--color-sidebar-foreground', description: 'Sidebar text', tailwindClasses: ['text-sidebar-foreground'], usage: 'Sidebar text' },
      { name: 'Sidebar Primary', cssVar: '--color-sidebar-primary', description: 'Sidebar active item', tailwindClasses: ['bg-sidebar-primary'], usage: 'Active nav items' },
      { name: 'Sidebar Primary Foreground', cssVar: '--color-sidebar-primary-foreground', description: 'Text on active items', tailwindClasses: ['text-sidebar-primary-foreground'], usage: 'Active nav text' },
      { name: 'Sidebar Accent', cssVar: '--color-sidebar-accent', description: 'Sidebar hover state', tailwindClasses: ['bg-sidebar-accent'], usage: 'Hover states' },
      { name: 'Sidebar Accent Foreground', cssVar: '--color-sidebar-accent-foreground', description: 'Text on hover', tailwindClasses: ['text-sidebar-accent-foreground'], usage: 'Hover text' },
      { name: 'Sidebar Border', cssVar: '--color-sidebar-border', description: 'Sidebar borders', tailwindClasses: ['border-sidebar-border'], usage: 'Sidebar dividers' },
      { name: 'Sidebar Ring', cssVar: '--color-sidebar-ring', description: 'Sidebar focus ring', tailwindClasses: ['ring-sidebar-ring'], usage: 'Sidebar focus states' },
    ],
  },
];

// Radius tokens removed - now hardcoded in JSX for better visual representation

export const ThemeTokens: React.FC = () => {
  return (
    <div className="p-8 space-y-12 bg-background text-foreground">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Design Tokens</h1>
        <p className="text-muted-foreground text-lg">
          Complete color palette and design tokens used across the shadcn-ui-kit.
          Toggle dark mode to see both themes.
        </p>
      </div>

      {/* Color Groups */}
      {colorGroups.map((group) => (
        <section key={group.title} className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-1">{group.title}</h2>
            <p className="text-muted-foreground">{group.description}</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {group.tokens.map((token) => (
              <div key={token.name} className="border border-border rounded-lg p-4 space-y-3">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Left: Color Preview */}
                  <div className="flex items-center gap-3 lg:w-1/3">
                    <div
                      className="w-16 h-16 rounded-md border-2 border-border flex-shrink-0"
                      style={{ backgroundColor: `var(${token.cssVar})` }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm">{token.name}</h3>
                      <p className="text-xs text-muted-foreground">{token.description}</p>
                    </div>
                  </div>

                  {/* Right: Info */}
                  <div className="flex-1 space-y-3">
                    {/* CSS Variable */}
                    <div className="bg-muted rounded px-2 py-1">
                      <code className="text-xs font-mono">{token.cssVar}</code>
                    </div>

                    {/* Tailwind Classes */}
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-muted-foreground">Tailwind Classes:</p>
                      <div className="flex flex-wrap gap-1">
                        {token.tailwindClasses.map((cls) => (
                          <code
                            key={cls}
                            className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
                          >
                            {cls}
                          </code>
                        ))}
                      </div>
                    </div>

                    {/* Usage */}
                    {token.usage && (
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Usage:</span> {token.usage}
                      </div>
                    )}
                  </div>
                </div>

                {/* Extended Palette */}
                {token.palette && (
                  <div className="pt-3 border-t border-border space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Extended Palette:</p>
                    <div className="flex gap-1">
                      {token.palette.lighter.map((shade, idx) => (
                        <div key={`lighter-${idx}`} className="flex-1 text-center space-y-1">
                          <div
                            className="h-12 rounded border border-border"
                            style={{ backgroundColor: shade.color }}
                          />
                          <code className="text-[10px] font-mono">{shade.label}</code>
                        </div>
                      ))}
                      {token.palette.darker.map((shade, idx) => (
                        <div 
                          key={`darker-${idx}`} 
                          className={`flex-1 text-center space-y-1 ${idx === 0 ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                        >
                          <div
                            className="h-12 rounded border border-border"
                            style={{ backgroundColor: shade.color }}
                          />
                          <code className="text-[10px] font-mono font-bold">{shade.label}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Border Radius */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Border Radius</h2>
          <p className="text-muted-foreground">Consistent border radius values across components</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Small */}
          <div className="space-y-3">
            <div 
              className="border-2 border-primary bg-primary/10 p-6 flex items-center justify-center min-h-32"
              style={{ borderRadius: '4px' }}
            >
              <span className="text-sm font-medium">4px</span>
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-semibold text-sm">Small</h3>
              <p className="text-xs text-muted-foreground">Border radius: 4px</p>
            </div>
            <code className="block text-xs bg-muted rounded px-2 py-1 font-mono text-center">
              rounded-sm
            </code>
          </div>

          {/* Medium */}
          <div className="space-y-3">
            <div 
              className="border-2 border-primary bg-primary/10 p-6 flex items-center justify-center min-h-32"
              style={{ borderRadius: '6px' }}
            >
              <span className="text-sm font-medium">6px</span>
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-semibold text-sm">Medium</h3>
              <p className="text-xs text-muted-foreground">Border radius: 6px</p>
            </div>
            <code className="block text-xs bg-muted rounded px-2 py-1 font-mono text-center">
              rounded-md
            </code>
          </div>

          {/* Large */}
          <div className="space-y-3">
            <div 
              className="border-2 border-primary bg-primary/10 p-6 flex items-center justify-center min-h-32"
              style={{ borderRadius: '8px' }}
            >
              <span className="text-sm font-medium">8px</span>
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-semibold text-sm">Large</h3>
              <p className="text-xs text-muted-foreground">Border radius: 8px</p>
            </div>
            <code className="block text-xs bg-muted rounded px-2 py-1 font-mono text-center">
              rounded-lg
            </code>
          </div>

          {/* Extra Large */}
          <div className="space-y-3">
            <div 
              className="border-2 border-primary bg-primary/10 p-6 flex items-center justify-center min-h-32"
              style={{ borderRadius: '12px' }}
            >
              <span className="text-sm font-medium">12px</span>
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-semibold text-sm">Extra Large</h3>
              <p className="text-xs text-muted-foreground">Border radius: 12px</p>
            </div>
            <code className="block text-xs bg-muted rounded px-2 py-1 font-mono text-center">
              rounded-xl
            </code>
          </div>
        </div>
      </section>

      {/* Color Palette Overview */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Color Palette Overview</h2>
          <p className="text-muted-foreground">Quick visual reference of all color tokens</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {colorGroups.flatMap((group) =>
            group.tokens.map((token) => (
              <div key={token.name} className="text-center space-y-2">
                <div
                  className="w-full h-20 rounded-lg border border-border"
                  style={{ backgroundColor: `var(${token.cssVar})` }}
                />
                <p className="text-xs font-medium truncate">{token.name}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

