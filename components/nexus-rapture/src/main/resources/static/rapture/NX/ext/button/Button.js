/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-present Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/*global Ext, NX*/

/**
 * A button with custom behaviour
 *
 * @since 3.next
 */
Ext.define('NX.ext.button.Button', {
  extend: 'Ext.button.Button',
  alias: 'widget.nx-button',

  disableWithTooltip: function(tooltipText) {
    this.disable();
    Ext.tip.QuickTipManager.register({
      showDelay: 50,
      target: this.getId(),
      text  : tooltipText,
      trackMouse: true
    });

    // hack to workaround ExtJS bug which prevents tooltips on disabled buttons
    // See https://www.sencha.com/forum/showthread.php?310184-Show-Tooltip-on-disabled-Button
    this.btnEl.dom.style.pointerEvents = "all";
  }

});
