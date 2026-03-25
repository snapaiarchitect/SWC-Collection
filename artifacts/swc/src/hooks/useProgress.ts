import { useState, useEffect, useCallback } from "react";
import { curriculumModules, phases } from "@/data/curriculumData";
import type { PhaseId } from "@/data/curriculumData";

const STORAGE_KEY = "swc-progress";
const TOTAL = curriculumModules.length;

function loadCompleted(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return new Set<number>(parsed);
  } catch {}
  return new Set();
}

function saveCompleted(ids: Set<number>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
  } catch {}
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<number>>(loadCompleted);

  useEffect(() => {
    saveCompleted(completed);
  }, [completed]);

  const isComplete = useCallback(
    (id: number) => completed.has(id),
    [completed]
  );

  const toggleComplete = useCallback((id: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const markComplete = useCallback((id: number) => {
    setCompleted((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const isPhaseComplete = useCallback(
    (phaseId: PhaseId) => {
      const phase = phases.find((p) => p.id === phaseId);
      if (!phase) return false;
      return phase.moduleIds.every((id) => completed.has(id));
    },
    [completed]
  );

  const completedCount = completed.size;
  const totalCount = TOTAL;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  return {
    completed,
    isComplete,
    toggleComplete,
    markComplete,
    isPhaseComplete,
    completedCount,
    totalCount,
    progressPct,
  };
}
