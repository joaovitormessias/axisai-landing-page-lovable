
import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

interface ChartRendererProps {
  graphId: string;
  onDrillDown: (value: string) => void;
}

export const ChartRenderer: React.FC<ChartRendererProps> = ({ graphId, onDrillDown }) => {
  const [chartOptions, setChartOptions] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Substituir pela URL real do endpoint do backend
        const response = await fetch(`/api/charts/${graphId}`);
        
        if (!response.ok) {
          throw new Error('Erro ao carregar dados do gráfico');
        }
        
        const data = await response.json();
        
        // Configurar opções do ECharts com tema escuro
        const options = {
          ...data,
          backgroundColor: 'transparent',
          textStyle: {
            color: 'hsl(var(--foreground))',
          },
          tooltip: {
            backgroundColor: 'hsl(var(--popover))',
            borderColor: 'hsl(var(--border))',
            textStyle: {
              color: 'hsl(var(--popover-foreground))',
            },
          },
          legend: {
            textStyle: {
              color: 'hsl(var(--foreground))',
            },
          },
          xAxis: {
            ...data.xAxis,
            axisLabel: {
              ...data.xAxis?.axisLabel,
              color: 'hsl(var(--muted-foreground))',
            },
            axisLine: {
              ...data.xAxis?.axisLine,
              lineStyle: {
                color: 'hsl(var(--border))',
              },
            },
          },
          yAxis: {
            ...data.yAxis,
            axisLabel: {
              ...data.yAxis?.axisLabel,
              color: 'hsl(var(--muted-foreground))',
            },
            axisLine: {
              ...data.yAxis?.axisLine,
              lineStyle: {
                color: 'hsl(var(--border))',
              },
            },
            splitLine: {
              ...data.yAxis?.splitLine,
              lineStyle: {
                color: 'hsl(var(--border))',
              },
            },
          },
        };
        
        setChartOptions(options);
      } catch (err) {
        console.error('Erro ao buscar dados do gráfico:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setIsLoading(false);
      }
    };

    fetchChartData();
  }, [graphId]);

  const handleChartClick = (params: any) => {
    if (params.data && params.data.name) {
      onDrillDown(`Analisar detalhes de: ${params.data.name}`);
    } else if (params.name) {
      onDrillDown(`Analisar detalhes de: ${params.name}`);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-96 my-4">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert className="my-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Erro ao carregar gráfico: {error}
        </AlertDescription>
      </Alert>
    );
  }

  if (!chartOptions) {
    return null;
  }

  return (
    <div className="w-full my-4 p-4 border border-border rounded-lg bg-card">
      <ReactECharts
        option={chartOptions}
        style={{ height: '400px', width: '100%' }}
        onEvents={{
          click: handleChartClick,
        }}
        theme="dark"
      />
    </div>
  );
};
