import { Component } from "solid-js";

export interface QuestionProps {
  onComplete: (success: boolean) => unknown;
}

export interface Question<Props = Record<string, unknown>> {
  Component: Component<Props & QuestionProps>;
  props: Props;
}

export type Questions = Question[] & { 0: Question };
