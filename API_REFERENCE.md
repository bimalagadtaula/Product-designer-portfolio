### API Reference

This document lists all public exports in the project with usage examples. Import paths use the configured alias `@/`.

- Node version: see `package.json`
- UI primitives are Radix-based shadcn components styled with Tailwind.

### Getting started

- Wrap your app with providers already set in `src/App.tsx` (`QueryClientProvider`, `TooltipProvider`, `Toaster`, `Sonner`).
- Most components are headless wrappers and accept standard HTML props along with styling via Tailwind classes.

---

## Utilities

- **`cn(...inputs: ClassValue[]): string`** from `src/lib/utils.ts`
  - Merge class names with Tailwind-aware `twMerge`.
  - Example:
    ```tsx
    import { cn } from "@/lib/utils";

    <div className={cn("p-4", isActive && "bg-primary")}>...</div>
    ```

---

## Hooks

- **`useIsMobile(): boolean`** from `src/hooks/use-mobile.tsx`
  - Returns `true` when viewport width < 768px.
  - Example:
    ```tsx
    import { useIsMobile } from "@/hooks/use-mobile";
    const isMobile = useIsMobile();
    ```

- **`useToast()`** and **`toast(opts)`** from `src/hooks/use-toast.ts`
  - Toast store and imperative helper used by `Toaster`.
  - Example:
    ```tsx
    import { toast, useToast } from "@/hooks/use-toast";

    function Demo() {
      const { dismiss } = useToast();
      return (
        <button onClick={() => toast({ title: "Saved", description: "Profile updated" })}>
          Save
        </button>
      );
    }
    ```

---

## Feedback and Overlay

- From `src/components/ui/toast.tsx`
  - Types: `ToastProps`, `ToastActionElement`
  - Components: `ToastProvider`, `ToastViewport`, `Toast`, `ToastTitle`, `ToastDescription`, `ToastClose`, `ToastAction`
- From `src/components/ui/toaster.tsx`
  - `Toaster()` component renders active toasts. Place once near the root.
  - Example:
    ```tsx
    // in App (already included)
    import { Toaster } from "@/components/ui/toaster";

    // fire a toast anywhere
    import { toast } from "@/hooks/use-toast";
    toast({ title: "Copied", description: "Text copied to clipboard" });
    ```

- From `src/components/ui/dialog.tsx` (Radix Dialog)
  - Exports: `Dialog`, `DialogPortal`, `DialogOverlay`, `DialogClose`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`
  - Example:
    ```tsx
    import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

    <Dialog>
      <DialogTrigger asChild>
        <button>Open</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modal title</DialogTitle>
        </DialogHeader>
        Content here
      </DialogContent>
    </Dialog>
    ```

- From `src/components/ui/alert-dialog.tsx` (confirm pattern)
  - Exports: `AlertDialog`, `AlertDialogPortal`, `AlertDialogOverlay`, `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogHeader`, `AlertDialogFooter`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogAction`, `AlertDialogCancel`
  - Example:
    ```tsx
    import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogAction, AlertDialogCancel, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";

    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button>Delete</button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Delete item?</AlertDialogTitle>
        <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        <div className="flex justify-end gap-2">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
    ```

---

## Forms and Inputs

- From `src/components/ui/button.tsx`
  - Exports: `Button`, `buttonVariants`
  - Props: `variant` (default | destructive | outline | secondary | ghost | link), `size` (default | sm | lg | icon), `asChild?: boolean`
  - Example:
    ```tsx
    import { Button } from "@/components/ui/button";
    <Button variant="secondary" size="lg">Click me</Button>
    ```

- From `src/components/ui/input.tsx`
  - Exports: `Input`
  - Example: `
    import { Input } from "@/components/ui/input";
    <Input placeholder="Email" type="email" />
    `

- From `src/components/ui/textarea.tsx`
  - Exports: `Textarea`
  - Example: `
    import { Textarea } from "@/components/ui/textarea";
    <Textarea placeholder="Your message" />
    `

- From `src/components/ui/select.tsx`
  - Exports: `Select`, `SelectGroup`, `SelectValue`, `SelectTrigger`, `SelectContent`, `SelectLabel`, `SelectItem`, `SelectSeparator`, `SelectScrollUpButton`, `SelectScrollDownButton`
  - Example:
    ```tsx
    import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

    <Select>
      <SelectTrigger><SelectValue placeholder="Choose" /></SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
        <SelectItem value="b">Option B</SelectItem>
      </SelectContent>
    </Select>
    ```

- Additional form primitives (exports only):
  - `src/components/ui/checkbox.tsx`: `Checkbox`
  - `src/components/ui/radio-group.tsx`: `RadioGroup`, `RadioGroupItem`
  - `src/components/ui/label.tsx`: `Label`
  - `src/components/ui/input-otp.tsx`: `InputOTP`, `InputOTPGroup`, `InputOTPSlot`, `InputOTPSeparator`
  - `src/components/ui/slider.tsx`: `Slider`
  - `src/components/ui/switch.tsx`: `Switch`
  - `src/components/ui/form.tsx`: `useFormField`, `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`

---

## Layout and Navigation

- From `src/components/ui/card.tsx`
  - Exports: `Card`, `CardHeader`, `CardFooter`, `CardTitle`, `CardDescription`, `CardContent`
  - Example:
    ```tsx
    import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

    <Card>
      <CardHeader><CardTitle>Title</CardTitle></CardHeader>
      <CardContent>Body</CardContent>
    </Card>
    ```

- From `src/components/ui/tabs.tsx`
  - Exports: `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`
  - Example:
    ```tsx
    import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

    <Tabs defaultValue="a">
      <TabsList>
        <TabsTrigger value="a">A</TabsTrigger>
        <TabsTrigger value="b">B</TabsTrigger>
      </TabsList>
      <TabsContent value="a">Panel A</TabsContent>
      <TabsContent value="b">Panel B</TabsContent>
    </Tabs>
    ```

- From `src/components/ui/sidebar.tsx`
  - Exports: `SidebarProvider`, `Sidebar`, `SidebarContent`, `SidebarFooter`, `SidebarGroup`, `SidebarGroupAction`, `SidebarGroupContent`, `SidebarGroupLabel`, `SidebarHeader`, `SidebarInput`, `SidebarInset`, `SidebarMenu`, `SidebarMenuAction`, `SidebarMenuBadge`, `SidebarMenuButton`, `SidebarMenuItem`, `SidebarMenuSkeleton`, `SidebarMenuSub`, `SidebarMenuSubButton`, `SidebarMenuSubItem`, `SidebarRail`, `SidebarSeparator`, `SidebarTrigger`, `useSidebar`
  - Example (minimal):
    ```tsx
    import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <SidebarTrigger />
        {/* page content */}
      </SidebarInset>
    </SidebarProvider>
    ```

- Other layout/navigation exports:
  - `src/components/ui/breadcrumb.tsx`: `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`, `BreadcrumbSeparator`, `BreadcrumbEllipsis`
  - `src/components/ui/pagination.tsx`: `Pagination`, `PaginationContent`, `PaginationEllipsis`, `PaginationItem`, `PaginationLink`, `PaginationNext`, `PaginationPrevious`
  - `src/components/ui/separator.tsx`: `Separator`
  - `src/components/ui/aspect-ratio.tsx`: `AspectRatio`
  - `src/components/ui/scroll-area.tsx`: `ScrollArea`, `ScrollBar`
  - `src/components/ui/resizable.tsx`: `ResizablePanelGroup`, `ResizablePanel`, `ResizableHandle`

---

## Data Display and Misc

- `src/components/ui/avatar.tsx`: `Avatar`, `AvatarImage`, `AvatarFallback`
- `src/components/ui/badge.tsx`: `Badge`, `badgeVariants` (variant helper)
- `src/components/ui/skeleton.tsx`: `Skeleton`
- `src/components/ui/table.tsx`: `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableHead`, `TableRow`, `TableCell`, `TableCaption`
- `src/components/ui/tooltip.tsx`: `Tooltip`, `TooltipTrigger`, `TooltipContent`, `TooltipProvider`
- `src/components/ui/alert.tsx`: `Alert`, `AlertTitle`, `AlertDescription`
- `src/components/ui/hover-card.tsx`: `HoverCard`, `HoverCardTrigger`, `HoverCardContent`
- `src/components/ui/context-menu.tsx`: `ContextMenu`, `ContextMenuTrigger`, `ContextMenuContent`, `ContextMenuGroup`, `ContextMenuItem`, `ContextMenuCheckboxItem`, `ContextMenuRadioGroup`, `ContextMenuRadioItem`, `ContextMenuLabel`, `ContextMenuSeparator`, `ContextMenuShortcut`, `ContextMenuSub`, `ContextMenuSubContent`, `ContextMenuSubTrigger`
- `src/components/ui/menubar.tsx`: `Menubar`, `MenubarMenu`, `MenubarTrigger`, `MenubarContent`, `MenubarItem`, `MenubarSeparator`, `MenubarShortcut`, `MenubarSub`, `MenubarSubTrigger`, `MenubarSubContent`, `MenubarPortal`
- `src/components/ui/dropdown-menu.tsx`: `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuCheckboxItem`, `DropdownMenuRadioGroup`, `DropdownMenuRadioItem`, `DropdownMenuLabel`, `DropdownMenuSeparator`, `DropdownMenuShortcut`, `DropdownMenuGroup`, `DropdownMenuPortal`, `DropdownMenuSub`, `DropdownMenuSubTrigger`, `DropdownMenuSubContent`
- `src/components/ui/navigation-menu.tsx`: `navigationMenuTriggerStyle`, `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuTrigger`, `NavigationMenuContent`, `NavigationMenuLink`, `NavigationMenuIndicator`, `NavigationMenuViewport`
- `src/components/ui/progress.tsx`: `Progress`
- `src/components/ui/toggle.tsx`: `Toggle`, `toggleVariants`
- `src/components/ui/toggle-group.tsx`: `ToggleGroup`, `ToggleGroupItem`
- `src/components/ui/sheet.tsx`: `Sheet`, `SheetClose`, `SheetContent`, `SheetDescription`, `SheetFooter`, `SheetHeader`, `SheetOverlay`, `SheetPortal`, `SheetTitle`, `SheetTrigger`
- `src/components/ui/drawer.tsx`: `Drawer`, `DrawerPortal`, `DrawerOverlay`, `DrawerTrigger`, `DrawerClose`, `DrawerContent`, `DrawerHeader`, `DrawerFooter`, `DrawerTitle`, `DrawerDescription`
- `src/components/ui/sonner.tsx`: `Toaster as Sonner`, `toast` (from `sonner` library)

---

## Date & Charts

- From `src/components/ui/calendar.tsx`
  - Exports: `Calendar`
  - Props: accepts all `react-day-picker` `DayPicker` props
  - Example:
    ```tsx
    import { Calendar } from "@/components/ui/calendar";
    <Calendar mode="single" selected={date} onSelect={setDate} />
    ```

- From `src/components/ui/chart.tsx`
  - Exports: `ChartContainer`, `ChartTooltip`, `ChartTooltipContent`, `ChartLegend`, `ChartLegendContent`, `ChartStyle`
  - Types: `ChartConfig`
  - Example:
    ```tsx
    import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart";
    import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

    const config: ChartConfig = { sales: { label: "Sales", color: "hsl(var(--primary))" } };

    <ChartContainer config={config} className="h-64 w-full">
      <LineChart data={[{ m: "Jan", sales: 12 }, { m: "Feb", sales: 20 }]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="m" /><YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" />
      </LineChart>
    </ChartContainer>
    ```

---

## Page-level components (project UI)

These are presentational sections used on the landing page.

- `src/components/Hero.tsx`: default export `Hero`
- `src/components/Services.tsx`: default export `Services`
- `src/components/Experience.tsx`: default export `Experience`
- `src/components/Portfolio.tsx`: default export `Portfolio`
- `src/components/Testimonials.tsx`: default export `Testimonials`
- `src/components/Contact.tsx`: default export `Contact`
- `src/components/Footer.tsx`: default export `Footer`

Example usage:
```tsx
import Hero from "@/components/Hero";
import Services from "@/components/Services";
// ...
<Hero />
<Services />
```

---

## Pages & App

- `src/App.tsx`: default export `App` – sets up providers and routes.
- `src/pages/Index.tsx`: default export `Index` – home route (`/`).
- `src/pages/NotFound.tsx`: default export `NotFound` – catch-all route.

Run locally:
```bash
npm i
npm run dev
```

Build:
```bash
npm run build
```

---

## Notes

- Most UI components forward refs and accept `className` for styling.
- Many components re-export Radix primitives; consult Radix docs for advanced props.
- Types are exported where useful (e.g., `ChartConfig`, `ToastProps`).