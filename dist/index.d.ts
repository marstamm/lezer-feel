import { LRParser, ContextTracker } from '@lezer/lr';

export const parser: LRParser;

export function normalizeContext(
  context: Record<string, any>
) : Record<string, any>;

export function trackVariables(
  context: Record<string, any>
) : ContextTracker<any>;