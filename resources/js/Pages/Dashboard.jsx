import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { ExpandableCards } from '@/Components/ui/expandable-cards';

export default function Dashboard() {
    const cards = [
        {
            title: "Analytics Dashboard",
            description: "View your statistics",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
            ctaText: "View",
            ctaLink: "#",
            content: () => {
                return (
                    <p>
                        Get detailed insights into your business performance with our comprehensive analytics dashboard. 
                        Track key metrics, monitor trends, and make data-driven decisions to grow your business. 
                        Features include real-time data visualization, customizable reports, and export capabilities.
                    </p>
                );
            },
        },
        {
            title: "Team Management",
            description: "Manage your team",
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80",
            ctaText: "Manage",
            ctaLink: "#",
            content: () => {
                return (
                    <p>
                        Efficiently manage your team members, assign roles, and track performance. 
                        Our team management tools help you collaborate better, set clear expectations, 
                        and ensure everyone is aligned with your company goals. Features include role-based 
                        access control, activity tracking, and performance metrics.
                    </p>
                );
            },
        },
        {
            title: "Projects",
            description: "Track your projects",
            src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
            ctaText: "Open",
            ctaLink: "#",
            content: () => {
                return (
                    <p>
                        Keep all your projects organized in one place. Create tasks, set deadlines, 
                        and monitor progress with intuitive project management tools. Collaborate with 
                        your team, share files, and stay on top of deliverables. Perfect for agile teams 
                        and traditional project management approaches.
                    </p>
                );
            },
        },
        {
            title: "Reports",
            description: "Generate reports",
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
            ctaText: "Create",
            ctaLink: "#",
            content: () => {
                return (
                    <p>
                        Generate comprehensive reports with just a few clicks. Our reporting system 
                        allows you to create custom reports, schedule automated deliveries, and share 
                        insights with stakeholders. Export to PDF, Excel, or share via email. 
                        Support for charts, graphs, and data tables.
                    </p>
                );
            },
        },
        {
            title: "Settings",
            description: "Configure your account",
            src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80",
            ctaText: "Configure",
            ctaLink: "#",
            content: () => {
                return (
                    <p>
                        Customize your experience with extensive configuration options. Update your profile, 
                        manage notifications, set preferences, and control privacy settings. 
                        Configure integrations with third-party services and customize your workspace 
                        to match your workflow.
                    </p>
                );
            },
        },
        {
            title: "Notifications",
            description: "Stay updated",
            src: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&q=80",
            ctaText: "View All",
            ctaLink: "#",
            content: () => {
                return (
                    <p>
                        Never miss important updates with our intelligent notification system. 
                        Get real-time alerts for mentions, messages, and critical events. 
                        Customize notification preferences, set quiet hours, and choose how you want 
                        to be notified across email, push, and in-app channels.
                    </p>
                );
            },
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-2xl font-bold mb-6">Welcome back!</h3>
                            <p className="text-gray-600 mb-8">
                                Click on any card below to explore more details
                            </p>
                            <ExpandableCards cards={cards} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}