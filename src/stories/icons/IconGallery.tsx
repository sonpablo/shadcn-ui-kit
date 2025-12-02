import React, { useState, useMemo } from 'react';
import { Input } from '../../components/input/input';
import { Badge } from '../../components/badge/badge';
import { Separator } from '../../components/separator/separator';

export interface IconGalleryProps {
  icons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>;
  variant: 'outline' | 'filled';
}

export const IconGallery: React.FC<IconGalleryProps> = ({ icons, variant }) => {
  const [search, setSearch] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const iconEntries = useMemo(() => Object.entries(icons), [icons]);

  const filteredIcons = useMemo(() => {
    if (!search.trim()) {
      return iconEntries.slice(0, 40);
    }
    return iconEntries.filter(([name]) =>
      name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, iconEntries]);

  const handleCopyImport = (iconName: string) => {
    const importStatement = `import { ${iconName} } from '@neura/shadcn-ui-kit-icons/${variant}';`;
    navigator.clipboard.writeText(importStatement);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div className="w-full space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Icon Gallery
              <Badge variant="secondary" className="ml-3">
                {variant}
              </Badge>
            </h2>
            <p className="text-muted-foreground mt-1">
              {iconEntries.length} icons available • Click any icon to copy its
              import
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Search */}
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Search icons... (e.g., 'arrow', 'user', 'check')"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
        <p className="text-muted-foreground text-sm">
          Showing {filteredIcons.length} of {iconEntries.length} icons
        </p>
      </div>

      {/* Grid */}
      {filteredIcons.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filteredIcons.map(([name, Icon]) => (
            <button
              key={name}
              onClick={() => handleCopyImport(name)}
              className="group border-border bg-card hover:bg-accent hover:border-primary relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border p-4 transition-all duration-200"
              title={`Click to copy import for ${name}`}
            >
              {/* Icon */}
              <div className="bg-muted group-hover:bg-background flex h-12 w-12 items-center justify-center rounded-md transition-colors">
                <Icon className="text-foreground size-6" />
              </div>

              {/* Name */}
              <div className="w-full text-center">
                <p className="text-muted-foreground group-hover:text-foreground truncate font-mono text-xs">
                  {name}
                </p>
              </div>

              {/* Copied indicator */}
              {copiedIcon === name && (
                <div className="bg-primary/90 animate-in fade-in zoom-in-95 absolute inset-0 flex items-center justify-center rounded-lg duration-200">
                  <div className="text-primary-foreground flex items-center gap-2 text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copied!
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <div className="bg-muted mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <h3 className="mb-1 text-lg font-semibold">No icons found</h3>
          <p className="text-muted-foreground">
            Try searching with a different term
          </p>
        </div>
      )}

      {/* Usage hint */}
      {filteredIcons.length > 0 && (
        <div className="border-border bg-muted/50 mt-8 rounded-lg border p-4">
          <h4 className="mb-2 text-sm font-semibold">💡 Usage</h4>
          <p className="text-muted-foreground mb-3 text-sm">
            Click any icon to copy its import statement. Then use it in your
            components:
          </p>
          <pre className="bg-background overflow-x-auto rounded border p-3 text-xs">
            <code className="text-foreground">
              {`import { ${filteredIcons[0][0]} } from '@neura/shadcn-ui-kit-icons/${variant}';

function MyComponent() {
  return <${filteredIcons[0][0]} className="size-6" />;
}`}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};
