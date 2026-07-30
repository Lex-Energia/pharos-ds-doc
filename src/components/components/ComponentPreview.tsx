'use client';

import {
  Component,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {Text} from '@pharos-ds/core/Text';
import {getDemos} from '@/demos/registry';
import type {ControlValue} from '@/demos/types';

function PreviewFallback({name}: {name: string}) {
  return (
    <div className="docs-preview-fallback">
      <Text type="supporting" color="secondary">
        {name}
      </Text>
    </div>
  );
}

type BoundaryState = {hasError: boolean};

class LivePreviewBoundary extends Component<
  {name: string; children: ReactNode},
  BoundaryState
> {
  state: BoundaryState = {hasError: false};

  static getDerivedStateFromError(): BoundaryState {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <PreviewFallback name={this.props.name} />;
    }
    return this.props.children;
  }
}

function LiveDemo({name}: {name: string}) {
  const demos = getDemos(name);
  const demo = demos[0];

  const defaults = useMemo(() => {
    if (!demo) return {} as Record<string, ControlValue>;
    const props: Record<string, ControlValue> = {};
    for (const control of demo.controls) {
      props[control.name] = control.defaultValue;
    }
    return props;
  }, [demo]);

  if (!demo) return <PreviewFallback name={name} />;

  return (
    <LivePreviewBoundary name={name}>
      <div className="docs-preview-stage">{demo.render(defaults)}</div>
    </LivePreviewBoundary>
  );
}

/** Preview vivo lazy (monta ao entrar no viewport). */
export function ComponentPreview({name}: {name: string}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      {rootMargin: '160px'},
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="docs-preview-frame" aria-hidden>
      {visible ? <LiveDemo name={name} /> : <PreviewFallback name={name} />}
    </div>
  );
}
