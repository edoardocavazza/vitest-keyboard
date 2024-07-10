import { describe, expect, it, vi } from 'vitest';
import { userEvent } from '@vitest/browser/context';

describe('keyboard', () => {
  it('should not release', async () => {
    const spyKeydown = vi.fn();
    const spyKeyup = vi.fn();
    const button = document.createElement('button');
    document.body.appendChild(button);
    button.addEventListener('keydown', spyKeydown);
    button.addEventListener('keyup', spyKeyup);
    button.focus();
    await userEvent.keyboard('{Enter>}');
    expect(spyKeydown).toHaveBeenCalledOnce();
    expect(spyKeyup).not.toHaveBeenCalled();
    await userEvent.keyboard('{/Enter}');
    expect(spyKeyup).toHaveBeenCalledOnce();
  });
});
