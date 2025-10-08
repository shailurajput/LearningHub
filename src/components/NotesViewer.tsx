import React, { useState } from 'react';
import { CourseNotes, TopicNotes, Note } from '../data/notes';
import { X, BookOpen, Clock, ChevronRight, ChevronDown, FileText, Lightbulb, Code, CheckCircle } from 'lucide-react';

interface NotesViewerProps {
  courseNotes: CourseNotes;
  onClose: () => void;
}

export const NotesViewer: React.FC<NotesViewerProps> = ({ courseNotes, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState<TopicNotes | null>(null);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());

  const toggleTopic = (topicId: string) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const handleTopicSelect = (topic: TopicNotes) => {
    setSelectedTopic(topic);
    setSelectedNote(null);
  };

  const handleNoteSelect = (note: Note) => {
    setSelectedNote(note);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-[90vh] overflow-hidden flex">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">{courseNotes.courseTitle}</h2>
                <p className="text-blue-100">Complete Study Notes & Resources</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex w-full mt-20">
          {/* Sidebar - Topics List */}
          <div className="w-1/3 bg-gray-50 border-r border-gray-200 overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Course Topics</h3>
              <div className="space-y-2">
                {courseNotes.topics.map((topic) => (
                  <div key={topic.topicId} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleTopic(topic.topicId)}
                      className="w-full p-4 text-left hover:bg-gray-100 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-gray-900">{topic.topicTitle}</span>
                      </div>
                      {expandedTopics.has(topic.topicId) ? (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    
                    {expandedTopics.has(topic.topicId) && (
                      <div className="bg-white border-t border-gray-200">
                        {topic.notes.map((note) => (
                          <button
                            key={note.id}
                            onClick={() => {
                              handleTopicSelect(topic);
                              handleNoteSelect(note);
                            }}
                            className={`w-full p-3 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                              selectedNote?.id === note.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-700">{note.title}</span>
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(note.difficulty)}`}>
                                  {note.difficulty}
                                </span>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                  <Clock className="w-3 h-3" />
                                  <span>{note.estimatedReadTime}</span>
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto">
            {selectedNote ? (
              <div className="p-8">
                {/* Note Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                    <span>{selectedTopic?.topicTitle}</span>
                    <ChevronRight className="w-4 h-4" />
                    <span>{selectedNote.title}</span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedNote.title}</h1>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedNote.difficulty)}`}>
                      {selectedNote.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{selectedNote.estimatedReadTime}</span>
                    </div>
                  </div>
                </div>

                {/* Note Content */}
                <div className="prose max-w-none">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                    <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                      {selectedNote.content}
                    </div>
                  </div>

                  {/* Examples Section */}
                  {selectedNote.examples && selectedNote.examples.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Code className="w-5 h-5 text-green-600" />
                        Code Examples
                      </h3>
                      <div className="space-y-3">
                        {selectedNote.examples.map((example, index) => (
                          <div key={index} className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                            <code>{example}</code>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Points Section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-600" />
                      Key Points to Remember
                    </h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                      <ul className="space-y-3">
                        {selectedNote.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedNote(null)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    ← Back to Topics
                  </button>
                  <div className="text-sm text-gray-500">
                    {selectedTopic && (
                      <span>
                        {selectedTopic.notes.findIndex(n => n.id === selectedNote.id) + 1} of {selectedTopic.notes.length} notes
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a Topic to Start Learning</h3>
                  <p className="text-gray-600 max-w-md">
                    Choose any topic from the sidebar to access comprehensive notes, examples, and key concepts.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};