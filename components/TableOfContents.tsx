import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

export default function TableOfContents({ items, className }: TableOfContentsProps) {
  return (
    <nav className={cn("bg-white p-6 rounded-xl border border-stone-200 shadow-sm sticky top-24 max-h-[80vh] overflow-y-auto", className)}>
      <h3 className="font-serif text-lg font-bold text-nature-dark mb-4 pb-2 border-b border-stone-100">Table of Contents</h3>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className="block text-stone-600 hover:text-nature-green hover:translate-x-1 transition-all duration-200 py-1"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
