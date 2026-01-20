import { Subject } from "@/types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: 'CS101',
    name: 'Introduction to Computer Science',
    department: 'Computer Science',
    description: 'An introductory course covering fundamental programming concepts, data structures, and algorithms. Students will learn problem-solving techniques and basic software development practices.',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: 'MATH201',
    name: 'Calculus II',
    department: 'Mathematics',
    description: 'Advanced calculus topics including integration techniques, sequences, series, and differential equations. Builds upon foundational calculus concepts with practical applications.',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: 'PHYS301',
    name: 'Quantum Mechanics',
    department: 'Physics',
    description: 'An exploration of quantum theory, wave functions, uncertainty principle, and quantum systems. Covers both theoretical foundations and experimental applications in modern physics.',
    updatedAt: new Date().toISOString(),
  },
];