import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Bell, Download, ExternalLink } from "lucide-react";

export const Notices = () => {
  const notices = [
    {
      id: 1,
      title: "Admission Open for Academic Year 2024-25",
      date: "2024-01-15",
      type: "Important",
      description: "Applications are now open for admission to all classes. Download the admission form and submit before the deadline.",
      urgent: true
    },
    {
      id: 2,
      title: "Annual Sports Day - February 10, 2024",
      date: "2024-01-20",
      type: "Event",
      description: "All students are invited to participate in our annual sports day. Registration forms available at the office.",
      urgent: false
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting Scheduled",
      date: "2024-01-25",
      type: "Meeting",
      description: "Quarterly parent-teacher meeting scheduled for February 5, 2024. All parents are requested to attend.",
      urgent: false
    },
    {
      id: 4,
      title: "Science Fair 2024 - Call for Projects",
      date: "2024-01-30",
      type: "Academic",
      description: "Students are encouraged to participate in the upcoming science fair. Project submission deadline: March 1, 2024.",
      urgent: false
    },
    {
      id: 5,
      title: "Holiday Notice - Republic Day",
      date: "2024-01-22",
      type: "Holiday",
      description: "School will remain closed on January 26, 2024, in observance of Republic Day. Regular classes will resume on January 27.",
      urgent: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Important": return "bg-destructive text-destructive-foreground";
      case "Event": return "bg-secondary text-secondary-foreground";
      case "Meeting": return "bg-accent text-accent-foreground";
      case "Academic": return "bg-primary text-primary-foreground";
      case "Holiday": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="notices" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Latest Notices
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and important information 
            from MPUP School Penikeru.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {notices.map((notice) => (
            <Card key={notice.id} className="shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {notice.urgent && (
                      <Bell className="w-5 h-5 text-destructive animate-pulse" />
                    )}
                    <CardTitle className="text-xl text-primary">{notice.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getTypeColor(notice.type)}>
                      {notice.type}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(notice.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {notice.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notice Board Info */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto shadow-card bg-gradient-card">
            <CardContent className="p-8">
              <Bell className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Stay Connected</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our notice board to receive instant updates about school activities, 
                important announcements, and academic schedules.
              </p>
              <Button variant="default" className="shadow-elegant">
                Subscribe to Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};