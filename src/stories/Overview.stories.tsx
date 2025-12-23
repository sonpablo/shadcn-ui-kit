import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  Activity,
  AlertTriangle,
  Bell,
  Bot,
  Calendar,
  Cpu,
  FileText,
  Globe,
  HelpCircle,
  Layers,
  Lock,
  Palette,
  Play,
  Send,
  Settings,
  Shield,
  Sparkles,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';

import { Badge } from '@/components/badge/badge';
import { Button } from '@/components/button/button';
import { Calendar as CalendarComponent } from '@/components/calendar/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card/card';
import { Checkbox } from '@/components/checkbox/checkbox';
import { Input } from '@/components/input/input';
import { Label } from '@/components/label/label';
import { Pill } from '@/components/pill/pill';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/radio-group/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select/select';
import { Separator } from '@/components/separator/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table/table';
import { Tag } from '@/components/tag/tag';
import { Textarea } from '@/components/textarea/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/tooltip/tooltip';
import { Avatar, AvatarFallback } from '@/components/avatar/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion/accordion';
import { MultiSelect } from '@/components/multi-select/multi-select';
import { ThemeProvider } from '@/components/theme-provider/theme-provider';
import { ModeToggle } from '@/components/mode-toggle/mode-toggle';
import { NeuraBreadcrumb } from '@/components/breadcrumb/neura-breadcrumb';
import { Link } from '@/components/link/link';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/tabs/tabs';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/pagination/pagination';

// --- Overview Component ---
function Overview() {
  const [selectedPlan, setSelectedPlan] = React.useState('fleet');
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <ThemeProvider defaultTheme="light" storageKey="neura-ui-theme">
      <TooltipProvider>
        <div className="bg-background text-foreground min-h-screen">
          {/* Header with ModeToggle */}
          <header className="border-b">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="14"
                viewBox="0 0 184 22"
                fill="currentColor"
                className="text-foreground"
              >
                <path d="M102.189 0.0274618V16.1994H83.5944V0H78.2852V17.722C78.2852 19.8549 80.0153 21.588 82.1512 21.588H104.099C105.967 21.588 107.48 20.0745 107.48 18.2071V0.0274618H102.189Z" />
                <path d="M41.8125 16.9922L39.1914 21.5569V21.56H68.3863V16.9922H41.8125Z" />
                <path d="M46.6875 8.5L44.0664 13.0648H44.4997H68.3853V8.5H46.6875Z" />
                <path d="M51.5644 0L48.9434 4.56476H68.3863V0H51.5644Z" />
                <path d="M145.297 7.33876C145.319 3.94266 142.624 0.015625 138.163 0.015625H117.381V21.5609H122.663L122.672 14.5826C122.672 14.5826 130.459 14.5673 133.663 14.5612C134.508 14.5612 135.02 14.7687 135.463 15.5498C136.595 17.5484 138.902 21.5609 138.902 21.5609H145.068C145.068 21.5609 142.191 16.5629 140.742 14.0425C143.494 12.6511 145.279 10.448 145.297 7.33876ZM139.539 7.26248C139.539 8.61116 138.331 9.95983 136.842 9.95983C132.076 9.95983 122.675 9.95983 122.675 9.95983V4.57123C122.675 4.57123 133.016 4.57123 136.842 4.57123C138.182 4.57123 139.292 5.66359 139.5 6.86581C139.521 6.99091 139.539 7.11296 139.539 7.23807C139.539 7.24417 139.539 7.24722 139.539 7.25332C139.539 7.25943 139.539 7.26553 139.539 7.26858V7.26248Z" />
                <path d="M152.334 21.5683L164.011 1.22223C164.442 0.471611 165.241 0.0078125 166.108 0.0078125H170.126C170.987 0.0078125 171.786 0.46856 172.216 1.21308L184 21.5683H177.761L168.112 4.80752L158.47 21.5683H152.337H152.334Z" />
                <path d="M35.148 0L25.5303 16.7151L20.8221 3.78667L20.5231 2.96282L19.9311 1.34258C19.8976 1.25104 19.8579 1.16255 19.803 1.08321C19.507 0.637723 19.0737 0.311233 18.5825 0.14036C18.5855 0.125104 18.5916 0.109847 18.5947 0.0945905L18.5764 0.137309C18.3262 0.0518722 18.0637 0.00305131 17.7891 0.00305131H13.7705C12.904 0.00305131 12.1076 0.46685 11.6743 1.21747L0 21.5605H6.13313L15.7508 4.84548L21.3591 20.2393C21.3927 20.3217 21.4293 20.4041 21.4782 20.4804C21.9236 21.1517 22.6773 21.5605 23.492 21.5605H27.5106C28.3772 21.5605 29.1735 21.0967 29.6068 20.3461L41.2811 0H35.148Z" />
              </svg>
              <ModeToggle />
            </div>
          </header>

          {/* Breadcrumb Navigation */}
          <div className="border-b">
            <div className="mx-auto max-w-7xl px-6 py-3">
              <NeuraBreadcrumb
                items={[
                  { label: 'Fleet Dashboard', to: '/' },
                  { label: 'Robots', to: '/robots' },
                  { label: 'MAiRA Units', to: '/robots/maira' },
                  { label: 'Component Showcase', to: '/showcase' },
                ]}
                ariaLabel="Page navigation"
              />
            </div>
          </div>

          {/* Hero Section */}
          <div className="from-muted/50 to-background relative overflow-hidden border-b bg-linear-to-b">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[24px_24px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
              <div className="flex flex-col items-center text-center">
                <Badge variant="secondary" className="mb-4 gap-1">
                  <Sparkles className="size-3" />
                  neura-ui-kit
                </Badge>

                <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Beautiful components for your{' '}
                  <span className="from-primary bg-linear-to-r via-blue-500 to-violet-500 bg-clip-text text-transparent">
                    Neura App
                  </span>
                </h1>

                <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
                  A complete design system built on ShadCN, Radix primitives and
                  Tailwind CSS. Accessible, customizable, and ready for
                  production.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Button size="lg" className="gap-2">
                    <Zap className="size-4" />
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <a href="https://neura-robotics.com/" target="_blank">
                      <Globe className="size-4" />
                      NEURA Robotic
                    </a>
                  </Button>
                </div>

                {/* Framework compatibility badges */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <Badge
                    variant="outline"
                    className="gap-2 px-3 py-1.5 text-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4"
                      fill="currentColor"
                    >
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                    </svg>
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="gap-2 px-3 py-1.5 text-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4"
                      fill="currentColor"
                    >
                      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                    </svg>
                    Next.js
                  </Badge>
                </div>

                <div className="text-muted-foreground mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="size-4 text-green-500" />
                    <span>Accessible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="size-4 text-violet-500" />
                    <span>Themeable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="size-4 text-amber-500" />
                    <span>Fast</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="size-4 text-blue-500" />
                    <span>TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Showcase Grid */}
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* --- New Robot Registration --- */}
              <Card className="lg:row-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="size-5" />
                    Register New Robot
                  </CardTitle>
                  <CardDescription>
                    Add a new robot to your fleet.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="robot-name">Robot Name</Label>
                    <Input id="robot-name" placeholder="MAiRA-001" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serial-number" className="flex items-center gap-1">
                      Serial Number
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="text-muted-foreground size-3.5 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          Format: NR-YYYY-MODEL-XXXX
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                    <Input
                      id="serial-number"
                      placeholder="NR-2025-MAI-0001"
                      prefix={<Cpu className="size-4" />}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-1">
                        Robot Model
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-muted-foreground size-3.5 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[200px]">
                            MAiRA: Cognitive robot • LARA: Collaborative • MAV: Mobile • MiPA: Assistant • 4NE1: Humanoid
                          </TooltipContent>
                        </Tooltip>
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maira">MAiRA</SelectItem>
                          <SelectItem value="lara">LARA</SelectItem>
                          <SelectItem value="mav">MAV</SelectItem>
                          <SelectItem value="mipa">MiPA</SelectItem>
                          <SelectItem value="4ne1">4NE1</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Application</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="palletizing">
                            Palletizing
                          </SelectItem>
                          <SelectItem value="welding">Welding</SelectItem>
                          <SelectItem value="machining">
                            Machine Tending
                          </SelectItem>
                          <SelectItem value="inspection">
                            Quality Inspection
                          </SelectItem>
                          <SelectItem value="gluing">
                            Gluing & Dosing
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Facility Location</Label>
                    <Input id="location" placeholder="Production Line A" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost">Cancel</Button>
                  <Button>Register Robot</Button>
                </CardFooter>
              </Card>

              {/* --- Fleet Operators --- */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="size-5" />
                    Fleet Operators
                  </CardTitle>
                  <CardDescription>
                    Team members managing your robot fleet.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: 'David Reger',
                        email: 'david@neura-robotics.com',
                        role: 'Fleet Admin',
                      },
                      {
                        name: 'Anna Schmidt',
                        email: 'anna@neura-robotics.com',
                        role: 'Robotics Engineer',
                      },
                      {
                        name: 'Marcus Weber',
                        email: 'marcus@neura-robotics.com',
                        role: 'Operator',
                      },
                    ].map((member) => (
                      <div
                        key={member.email}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="size-9">
                            <AvatarFallback>
                              {member.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{member.name}</p>
                            <p className="text-muted-foreground text-xs">
                              {member.email}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary">{member.role}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* --- Robot Alerts --- */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="size-5" />
                    Robot Alerts
                  </CardTitle>
                  <CardDescription>
                    Configure fleet notification preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Label
                    htmlFor="maintenance-alert"
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Wrench className="text-muted-foreground size-4" />
                      <span>Maintenance Alerts</span>
                    </div>
                    <Checkbox
                      id="maintenance-alert"
                      checked={notificationsEnabled}
                      onCheckedChange={(v) =>
                        setNotificationsEnabled(v === true)
                      }
                    />
                  </Label>
                  <Label
                    htmlFor="error-alert"
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="text-muted-foreground size-4" />
                      <span>Error Notifications</span>
                    </div>
                    <Checkbox id="error-alert" defaultChecked />
                  </Label>
                  <Label
                    htmlFor="status-updates"
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Activity className="text-muted-foreground size-4" />
                      <span>Status Updates</span>
                    </div>
                    <Checkbox id="status-updates" />
                  </Label>
                </CardContent>
              </Card>

              {/* --- Maintenance Schedule --- */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="size-5" />
                    Maintenance Schedule
                  </CardTitle>
                  <CardDescription>
                    Schedule preventive maintenance for your fleet.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <Label>Scheduled Date</Label>
                      <p className="text-2xl font-semibold">
                        {date?.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label>Available Slots</Label>
                      <div className="flex flex-wrap gap-2">
                        {['06:00 AM', '08:00 AM', '10:00 AM', '02:00 PM'].map(
                          (time) => (
                            <Pill key={time}>{time}</Pill>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* --- Fleet Status --- */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="size-5" />
                    Fleet Status
                  </CardTitle>
                  <CardDescription>
                    Monitor your active robots in real-time.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Robot ID</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">
                          <span className="inline-flex items-center gap-1">
                            Uptime
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="text-muted-foreground size-3.5 cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                Percentage of time the robot is operational
                              </TooltipContent>
                            </Tooltip>
                          </span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: 'MAiRA-001',
                          model: 'MAiRA',
                          status: 'Active',
                          uptime: '99.8%',
                        },
                        {
                          id: 'LARA-003',
                          model: 'LARA',
                          status: 'Maintenance',
                          uptime: '97.2%',
                        },
                        {
                          id: '4NE1-002',
                          model: '4NE1',
                          status: 'Active',
                          uptime: '99.5%',
                        },
                      ].map((robot) => (
                        <TableRow key={robot.id}>
                          <TableCell className="font-medium">
                            {robot.id}
                          </TableCell>
                          <TableCell>{robot.model}</TableCell>
                          <TableCell>
                            <Tag
                              variant={
                                robot.status === 'Active' ? 'green' : 'yellow'
                              }
                            >
                              {robot.status}
                            </Tag>
                          </TableCell>
                          <TableCell className="text-right">
                            {robot.uptime}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* --- Fleet Plans --- */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="size-5" />
                    Fleet Plans
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="text-muted-foreground size-4 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        All plans include 24/7 support and OTA updates
                      </TooltipContent>
                    </Tooltip>
                  </CardTitle>
                  <CardDescription>
                    Choose the right plan for your fleet size.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={selectedPlan}
                    onValueChange={setSelectedPlan}
                    className="space-y-3"
                  >
                    {[
                      {
                        value: 'starter',
                        label: 'Starter',
                        price: '€499/mo',
                        desc: 'Up to 5 robots',
                      },
                      {
                        value: 'fleet',
                        label: 'Fleet',
                        price: '€1,499/mo',
                        desc: 'Up to 25 robots',
                      },
                      {
                        value: 'enterprise',
                        label: 'Enterprise',
                        price: 'Custom',
                        desc: 'Unlimited robots',
                      },
                    ].map((plan) => (
                      <Label
                        key={plan.value}
                        htmlFor={plan.value}
                        className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-colors ${
                          selectedPlan === plan.value
                            ? 'border-primary bg-primary/5'
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        <RadioGroupItem value={plan.value} id={plan.value} />
                        <div className="flex-1">
                          <p className="font-medium">{plan.label}</p>
                          <p className="text-muted-foreground text-sm">
                            {plan.desc}
                          </p>
                        </div>
                        <span className="text-lg font-semibold">
                          {plan.price}
                        </span>
                      </Label>
                    ))}
                  </RadioGroup>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Select{' '}
                    {selectedPlan.charAt(0).toUpperCase() +
                      selectedPlan.slice(1)}{' '}
                    Plan
                  </Button>
                </CardFooter>
              </Card>

              {/* --- Quick Actions --- */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Common fleet management tasks.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-auto flex-col gap-2 py-4"
                      >
                        <Play className="size-5" />
                        <span className="text-xs">Deploy</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Deploy new robot</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-auto flex-col gap-2 py-4"
                      >
                        <Activity className="size-5" />
                        <span className="text-xs">Monitor</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>View fleet analytics</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-auto flex-col gap-2 py-4"
                      >
                        <Settings className="size-5" />
                        <span className="text-xs">Configure</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Robot settings</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-auto flex-col gap-2 py-4"
                      >
                        <FileText className="size-5" />
                        <span className="text-xs">Reports</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Generate reports</TooltipContent>
                  </Tooltip>
                </CardContent>
              </Card>

              {/* --- Robot Capabilities (MultiSelect) --- */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="size-5" />
                    Robot Capabilities
                  </CardTitle>
                  <CardDescription>
                    Select the capabilities for your robot deployment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1">
                      Applications
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="text-muted-foreground size-3.5 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          Select one or more robot applications
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                    <MultiSelect
                      options={[
                        { value: 'palletizing', label: 'Palletizing' },
                        { value: 'welding', label: 'Welding' },
                        { value: 'machine-tending', label: 'Machine Tending' },
                        {
                          value: 'quality-inspection',
                          label: 'Quality Inspection',
                        },
                        { value: 'assembly', label: 'Assembly' },
                        { value: 'pick-place', label: 'Pick & Place' },
                      ]}
                      defaultValue={['palletizing', 'welding']}
                      onValueChange={() => {}}
                      placeholder="Select applications..."
                      maxCount={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Sensors</Label>
                    <MultiSelect
                      options={[
                        { value: 'vision', label: '🎥 Vision System' },
                        { value: 'force', label: '💪 Force/Torque Sensor' },
                        { value: 'lidar', label: '📡 LiDAR' },
                        { value: 'proximity', label: '📏 Proximity Sensor' },
                        { value: 'thermal', label: '🌡️ Thermal Camera' },
                      ]}
                      defaultValue={['vision', 'force']}
                      onValueChange={() => {}}
                      placeholder="Select sensors..."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* --- Robot Status Tags (Pill) --- */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="size-5" />
                    Status Filters
                  </CardTitle>
                  <CardDescription>
                    Filter robots by their current status.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <div className="flex flex-wrap gap-2">
                      <Pill variant="selected">
                        <span className="size-2 rounded-full bg-green-500" />
                        Active
                      </Pill>
                      <Pill>
                        <span className="size-2 rounded-full bg-yellow-500" />
                        Maintenance
                      </Pill>
                      <Pill>
                        <span className="size-2 rounded-full bg-red-500" />
                        Offline
                      </Pill>
                      <Pill>
                        <span className="size-2 rounded-full bg-blue-500" />
                        Standby
                      </Pill>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Robot Models</Label>
                    <div className="flex flex-wrap gap-2">
                      <Pill size="sm" variant="selected">
                        MAiRA
                      </Pill>
                      <Pill size="sm" variant="selected">
                        LARA
                      </Pill>
                      <Pill size="sm">MAV</Pill>
                      <Pill size="sm">MiPA</Pill>
                      <Pill size="sm">4NE1</Pill>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Facilities</Label>
                    <div className="flex flex-wrap gap-2">
                      <Pill size="lg">🏭 Munich Plant A</Pill>
                      <Pill size="lg" variant="selected">
                        🏢 Stuttgart Factory
                      </Pill>
                      <Pill size="lg">📦 Berlin Warehouse</Pill>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* --- Accordion FAQ --- */}
              <Card>
                <CardHeader>
                  <CardTitle>FAQ</CardTitle>
                  <CardDescription>
                    Common questions about Neura robots.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        What is cognitive robotics?
                      </AccordionTrigger>
                      <AccordionContent>
                        Cognitive robots can sense, respond, and adapt to their
                        environment using advanced AI and perception systems.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        Which robot model should I choose?
                      </AccordionTrigger>
                      <AccordionContent>
                        MAiRA is ideal for complex automation, LARA for
                        collaborative tasks, MAV for mobile applications, and
                        4NE1 for humanoid assistance.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        How do I integrate with Neuraverse?
                      </AccordionTrigger>
                      <AccordionContent>
                        Neuraverse provides a unified platform for managing your
                        fleet, AI models, and applications in one place.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* --- Robot Details Tabs --- */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="size-5" />
                    Robot Details
                  </CardTitle>
                  <CardDescription>
                    View detailed information about the selected robot.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview">
                    <TabsList>
                      <TabsTrigger value="overview">
                        <Activity className="size-4" />
                        Overview
                      </TabsTrigger>
                      <TabsTrigger value="diagnostics">
                        <Wrench className="size-4" />
                        Diagnostics
                      </TabsTrigger>
                      <TabsTrigger value="history">
                        <FileText className="size-4" />
                        History
                      </TabsTrigger>
                      <TabsTrigger value="settings">
                        <Settings className="size-4" />
                        Settings
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                      <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-3">
                          <div className="bg-muted/50 rounded-lg p-4">
                            <p className="text-muted-foreground text-sm">Status</p>
                            <p className="mt-1 text-2xl font-semibold text-green-500">
                              Active
                            </p>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-4">
                            <p className="text-muted-foreground text-sm">Uptime</p>
                            <p className="mt-1 text-2xl font-semibold">99.8%</p>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-4">
                            <p className="text-muted-foreground text-sm">
                              Tasks Completed
                            </p>
                            <p className="mt-1 text-2xl font-semibold">1,247</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          MAiRA-001 is operating normally with no issues detected.
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="diagnostics">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">CPU Temperature</span>
                          <Badge variant="secondary">42°C</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Motor Health</span>
                          <Badge className="bg-green-500/10 text-green-500">
                            Excellent
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Battery Level</span>
                          <Badge variant="secondary">87%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Last Calibration</span>
                          <span className="text-muted-foreground text-sm">
                            2 days ago
                          </span>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="history">
                      <div className="space-y-2">
                        {[
                          { time: '10:32 AM', event: 'Task completed: Palletizing' },
                          { time: '10:15 AM', event: 'Started new task' },
                          { time: '09:45 AM', event: 'Maintenance check passed' },
                          { time: '08:00 AM', event: 'System startup' },
                        ].map((log, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-sm"
                          >
                            <span className="text-muted-foreground w-20">
                              {log.time}
                            </span>
                            <span>{log.event}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="settings">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">Auto-restart</p>
                            <p className="text-muted-foreground text-xs">
                              Restart on error detection
                            </p>
                          </div>
                          <Checkbox defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">Verbose Logging</p>
                            <p className="text-muted-foreground text-xs">
                              Enable detailed logs
                            </p>
                          </div>
                          <Checkbox />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* --- Pagination Example --- */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="size-5" />
                    Data Pagination
                  </CardTitle>
                  <CardDescription>
                    Navigate through robot activity logs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-muted-foreground text-sm">
                      Showing entries 21-30 of 127 total records
                    </div>
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">4</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">13</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href="#" />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </CardContent>
              </Card>

              {/* --- Support Request Form --- */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="size-5" />
                    Support Request
                  </CardTitle>
                  <CardDescription>
                    Need help with your fleet? Contact our team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Name</Label>
                      <Input
                        id="contact-name"
                        placeholder="Your name"
                        prefix={<Users className="size-4" />}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="robot-id">Robot ID (optional)</Label>
                      <Input
                        id="robot-id"
                        placeholder="MAiRA-001"
                        prefix={<Bot className="size-4" />}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="issue-description">Issue Description</Label>
                    <Textarea
                      id="issue-description"
                      placeholder="Describe the issue or request..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="urgent" />
                    <Label
                      htmlFor="urgent"
                      className="text-muted-foreground flex items-center gap-1 text-sm"
                    >
                      Mark as urgent
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="text-muted-foreground size-3.5 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          Urgent requests are prioritized and responded to within 2 hours
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    By submitting, you agree to our{' '}
                    <Link href="#" size="xs">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="#" size="xs">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </CardContent>
                <CardFooter className="justify-end gap-2">
                  <Button variant="destructive">Cancel</Button>
                  <Button className="gap-2">
                    <Send className="size-4" />
                    Submit Request
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Components Summary */}
          <div className="bg-muted/30 border-t">
            <div className="mx-auto max-w-7xl px-6 py-16">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Everything you need to build
                </h2>
                <p className="text-muted-foreground mt-2">
                  A comprehensive collection of {32}+ components
                </p>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-2">
                {[
                  'Accordion',
                  'Avatar',
                  'Badge',
                  'Breadcrumb',
                  'Button',
                  'Calendar',
                  'Card',
                  'Checkbox',
                  'Command',
                  'DatePicker',
                  'Dialog',
                  'DropdownMenu',
                  'Field',
                  'Input',
                  'Label',
                  'Link',
                  'MultiSelect',
                  'Pagination',
                  'Pill',
                  'Popover',
                  'RadioGroup',
                  'Select',
                  'Separator',
                  'Switch',
                  'Table',
                  'Tabs',
                  'Tag',
                  'Textarea',
                  'Tooltip',
                ].map((component) => (
                  <Badge
                    key={component}
                    variant="outline"
                    className="px-3 py-1"
                  >
                    {component}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t">
            <div className="mx-auto max-w-7xl px-6 py-8">
              <p className="text-muted-foreground text-center text-sm">
                Built using ShadCN, Radix UI, Tailwind CSS, React Hook Forms,
                and TypeScript
              </p>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

// --- Storybook Meta ---
const meta = {
  title: 'Overview',
  component: Overview,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      page: null, // Hide docs page for overview
    },
  },
} satisfies Meta<typeof Overview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  name: 'Component Showcase',
};
