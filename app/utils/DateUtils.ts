export const formatDate = (date: Date | string): string => {
    return new Intl.DateTimeFormat('ar-EG', { day: '2-digit', month: 'long', year: 'numeric' })
      .format(typeof date === 'string' ? new Date(date) : date);
  };
  