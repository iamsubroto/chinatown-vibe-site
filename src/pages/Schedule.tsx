import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Clock, Users, Flame } from "lucide-react";

const classTypes = [
  "All Classes",
  "Flow Yoga",
  "HIIT",
  "Strength",
  "Boxing",
  "Meditation",
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const scheduleData = [
  { day: "Monday", time: "6:00 AM", name: "Morning Flow Yoga", instructor: "Sarah Kim", duration: "60 min", type: "Flow Yoga", intensity: "Low" },
  { day: "Monday", time: "7:30 AM", name: "HIIT Burn", instructor: "Marcus Chen", duration: "45 min", type: "HIIT", intensity: "High" },
  { day: "Monday", time: "12:00 PM", name: "Strength Fundamentals", instructor: "Jake Torres", duration: "50 min", type: "Strength", intensity: "Medium" },
  { day: "Monday", time: "5:30 PM", name: "Power Boxing", instructor: "Lisa Wang", duration: "45 min", type: "Boxing", intensity: "High" },
  { day: "Monday", time: "7:00 PM", name: "Evening Flow", instructor: "Sarah Kim", duration: "60 min", type: "Flow Yoga", intensity: "Low" },
  
  { day: "Tuesday", time: "6:30 AM", name: "Sunrise HIIT", instructor: "Marcus Chen", duration: "45 min", type: "HIIT", intensity: "High" },
  { day: "Tuesday", time: "9:00 AM", name: "Gentle Yoga", instructor: "Emma Liu", duration: "60 min", type: "Flow Yoga", intensity: "Low" },
  { day: "Tuesday", time: "12:30 PM", name: "Boxing Basics", instructor: "Lisa Wang", duration: "45 min", type: "Boxing", intensity: "Medium" },
  { day: "Tuesday", time: "6:00 PM", name: "Full Body Strength", instructor: "Jake Torres", duration: "55 min", type: "Strength", intensity: "High" },
  { day: "Tuesday", time: "8:00 PM", name: "Meditation & Breathwork", instructor: "Emma Liu", duration: "30 min", type: "Meditation", intensity: "Low" },
  
  { day: "Wednesday", time: "6:00 AM", name: "Dynamic Flow", instructor: "Sarah Kim", duration: "60 min", type: "Flow Yoga", intensity: "Medium" },
  { day: "Wednesday", time: "7:30 AM", name: "Cardio Boxing", instructor: "Lisa Wang", duration: "45 min", type: "Boxing", intensity: "High" },
  { day: "Wednesday", time: "12:00 PM", name: "Core Strength", instructor: "Jake Torres", duration: "40 min", type: "Strength", intensity: "Medium" },
  { day: "Wednesday", time: "5:30 PM", name: "HIIT Express", instructor: "Marcus Chen", duration: "30 min", type: "HIIT", intensity: "High" },
  { day: "Wednesday", time: "7:00 PM", name: "Restorative Yoga", instructor: "Emma Liu", duration: "60 min", type: "Flow Yoga", intensity: "Low" },
  
  { day: "Thursday", time: "6:30 AM", name: "Strength & Conditioning", instructor: "Jake Torres", duration: "50 min", type: "Strength", intensity: "High" },
  { day: "Thursday", time: "9:00 AM", name: "Flow & Stretch", instructor: "Sarah Kim", duration: "60 min", type: "Flow Yoga", intensity: "Low" },
  { day: "Thursday", time: "12:30 PM", name: "Lunch HIIT", instructor: "Marcus Chen", duration: "45 min", type: "HIIT", intensity: "High" },
  { day: "Thursday", time: "6:00 PM", name: "Fight Night Boxing", instructor: "Lisa Wang", duration: "60 min", type: "Boxing", intensity: "High" },
  { day: "Thursday", time: "8:00 PM", name: "Zen Meditation", instructor: "Emma Liu", duration: "30 min", type: "Meditation", intensity: "Low" },
  
  { day: "Friday", time: "6:00 AM", name: "Rise & Flow", instructor: "Sarah Kim", duration: "60 min", type: "Flow Yoga", intensity: "Medium" },
  { day: "Friday", time: "7:30 AM", name: "HIIT Friday", instructor: "Marcus Chen", duration: "45 min", type: "HIIT", intensity: "High" },
  { day: "Friday", time: "12:00 PM", name: "Upper Body Blast", instructor: "Jake Torres", duration: "45 min", type: "Strength", intensity: "Medium" },
  { day: "Friday", time: "5:30 PM", name: "Happy Hour Boxing", instructor: "Lisa Wang", duration: "45 min", type: "Boxing", intensity: "Medium" },
  
  { day: "Saturday", time: "8:00 AM", name: "Weekend Warrior HIIT", instructor: "Marcus Chen", duration: "60 min", type: "HIIT", intensity: "High" },
  { day: "Saturday", time: "10:00 AM", name: "Community Flow Yoga", instructor: "Sarah Kim", duration: "75 min", type: "Flow Yoga", intensity: "Medium" },
  { day: "Saturday", time: "12:00 PM", name: "Strength Circuit", instructor: "Jake Torres", duration: "50 min", type: "Strength", intensity: "High" },
  { day: "Saturday", time: "2:00 PM", name: "Boxing Bootcamp", instructor: "Lisa Wang", duration: "60 min", type: "Boxing", intensity: "High" },
  
  { day: "Sunday", time: "9:00 AM", name: "Sunday Slow Flow", instructor: "Emma Liu", duration: "75 min", type: "Flow Yoga", intensity: "Low" },
  { day: "Sunday", time: "11:00 AM", name: "Mindful Meditation", instructor: "Emma Liu", duration: "45 min", type: "Meditation", intensity: "Low" },
  { day: "Sunday", time: "1:00 PM", name: "Recovery Strength", instructor: "Jake Torres", duration: "40 min", type: "Strength", intensity: "Low" },
];

const getIntensityColor = (intensity: string) => {
  switch (intensity) {
    case "Low":
      return "bg-emerald-500/20 text-emerald-600";
    case "Medium":
      return "bg-amber-500/20 text-amber-600";
    case "High":
      return "bg-red-500/20 text-red-600";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Schedule = () => {
  const [selectedType, setSelectedType] = useState("All Classes");
  const [selectedDay, setSelectedDay] = useState("Monday");

  const filteredClasses = scheduleData.filter(
    (item) =>
      item.day === selectedDay &&
      (selectedType === "All Classes" || item.type === selectedType)
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium mb-6">
            Class Schedule
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Your <span className="text-gradient-gold">Class</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Over 50 weekly classes designed to challenge, inspire, and transform.
            Book your spot today.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-warm-white">
        <div className="container-custom">
          {/* Class Type Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {classTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedType === type
                    ? "bg-gradient-gold text-white shadow-gold"
                    : "bg-white text-charcoal hover:bg-muted shadow-sm"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Day Filter */}
          <div className="flex overflow-x-auto gap-2 pb-4 mb-8 -mx-4 px-4 md:justify-center">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  selectedDay === day
                    ? "bg-charcoal text-white"
                    : "bg-white text-charcoal hover:bg-muted shadow-sm"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Classes Grid */}
          <div className="grid gap-4">
            {filteredClasses.length > 0 ? (
              filteredClasses.map((classItem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-card hover-lift flex flex-col md:flex-row md:items-center gap-4"
                >
                  {/* Time */}
                  <div className="md:w-24 shrink-0">
                    <span className="font-display text-xl font-bold text-charcoal">
                      {classItem.time}
                    </span>
                  </div>

                  {/* Class Info */}
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-charcoal mb-1">
                      {classItem.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      with {classItem.instructor}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {classItem.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {classItem.type}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getIntensityColor(
                        classItem.intensity
                      )}`}
                    >
                      <Flame className="w-3 h-3" />
                      {classItem.intensity}
                    </span>
                  </div>

                  {/* Book Button */}
                  <Button variant="gold-outline" size="sm" className="md:w-auto">
                    Book Class
                  </Button>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  No classes found for this filter. Try another day or class type.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;