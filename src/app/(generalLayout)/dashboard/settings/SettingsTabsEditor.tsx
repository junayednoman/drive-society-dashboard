"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Save, Check } from "lucide-react";
import JoditTextEditor from "@/components/form/ATextEditor";
import { settingData } from "@/data/settings.data";

interface ContentSection {
  id: string;
  title: string;
  content: string;
}

const SettingsTabsEditor = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [savingStates, setSavingStates] = useState<Record<string, boolean>>({});
  const [savedStates, setSavedStates] = useState<Record<string, boolean>>({});

  const [contentSections, setContentSections] =
    useState<ContentSection[]>(settingData);

  const handleContentChange = (sectionId: string, content: string) => {
    setContentSections((prev) =>
      prev.map((section) =>
        section.id === sectionId ? { ...section, content } : section
      )
    );
    // Reset saved state when content changes
    setSavedStates((prev) => ({ ...prev, [sectionId]: false }));
  };

  const currentSection = contentSections.find(
    (section) => section.id === activeTab
  );
  console.log("currentSection", currentSection);
  const handleSave = async (sectionId: string) => {
    setSavingStates((prev) => ({ ...prev, [sectionId]: true }));

    try {
      // Simulate save operation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const section = contentSections.find((s) => s.id === sectionId);
      console.log(`Saving ${section?.title}:`, section?.content);

      // Here you would make your API call
      // await saveContent(sectionId, section?.content)

      setSavedStates((prev) => ({ ...prev, [sectionId]: true }));
      setTimeout(() => {
        setSavedStates((prev) => ({ ...prev, [sectionId]: false }));
      }, 2000);
    } catch (error) {
      console.error("Save failed:", error);
    } finally {
      setSavingStates((prev) => ({ ...prev, [sectionId]: false }));
    }
  };

  return (
    <div className="h-screen bg-background flex flex-col">
      <div className="flex-1">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex flex-col"
        >
          {/* Tabs Header */}
          <TabsList className="grid w-full grid-cols-3 bg-card mb-6 h-14">
            <TabsTrigger
              value="about"
              className="data-[state=active]:bg-primary data-[state=active]:text-card"
            >
              About Us
            </TabsTrigger>
            <TabsTrigger
              value="terms"
              className="data-[state=active]:bg-primary data-[state=active]:text-card"
            >
              Terms & Conditions
            </TabsTrigger>
            <TabsTrigger
              value="privacy"
              className="data-[state=active]:bg-primary data-[state=active]:text-card"
            >
              Privacy Policy
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className="flex-1 flex flex-col">
            {contentSections.map((section) => (
              <TabsContent
                key={section.id}
                value={section.id}
                className="flex-1 flex flex-col mt-0"
              >
                <div className="flex-1 flex flex-col">
                  {/* Editor */}
                  <div className="flex-1 mb-6">
                    <div className="h-fit  rounded-lg overflow-hidden">
                      <JoditTextEditor
                        content={section.content}
                        onChange={(content) =>
                          handleContentChange(section.id, content)
                        }
                        placeholder={`Enter your ${section.title.toLowerCase()} content here...`}
                      />
                      {/* Save Button */}
                      <div className="flex justify-end mt-8">
                        <Button
                          onClick={() => handleSave(section.id)}
                          disabled={
                            savingStates[section.id] || savedStates[section.id]
                          }
                          className="min-w-[140px] gap-2"
                          size="lg"
                        >
                          {savingStates[section.id] ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                              Saving...
                            </>
                          ) : savedStates[section.id] ? (
                            <>
                              <Check className="h-4 w-4" />
                              Saved
                            </>
                          ) : (
                            <>
                              <Save className="h-4 w-4" />
                              Save Changes
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsTabsEditor;
